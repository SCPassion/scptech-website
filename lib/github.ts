const GITHUB_USERNAME = "SCPassion";
const GITHUB_API_BASE = "https://api.github.com";
const FEATURED_REPO_ORDER = [
  "pyth-board",
  "asset-tracking",
  "saga-profolio",
  "ecommerce-app",
];

export type GithubProfile = {
  name: string;
  bio: string;
  avatarUrl: string;
  githubUrl: string;
  twitterUrl?: string;
  publicRepos: number;
  followers: number;
};

export type GithubProject = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
};

type GithubUserApi = {
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
};

type GithubRepoApi = {
  name: string;
  description: string | null;
  language: string | null;
  homepage: string | null;
  html_url: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

const projectImageMap: Record<string, string> = {
  "pyth-board": "/pythnetwork.png",
  "asset-tracking": "/placeholder.svg",
  "ecommerce-app": "/ecommerce.png",
  "saga-profolio": "/saga.png",
  vanlife: "/vanlife.png",
};

const projectTitleMap: Record<string, string> = {
  "asset-tracking": "TrackAny",
};

const fallbackProfile: GithubProfile = {
  name: "SCP",
  bio: "Creator of SCPTech, Pyth & Fogo builder, Full-Stack Developer focused on React, Next.js, TypeScript, and Tailwind CSS.",
  avatarUrl: "/pythenianNFT.jpg",
  githubUrl: "https://github.com/SCPassion",
  twitterUrl: "https://x.com/KaiCryptohk",
  publicRepos: 69,
  followers: 8,
};

const fallbackProjects: GithubProject[] = [
  {
    title: "TrackAny",
    description:
      "Asset tracking dashboard for monitoring wallet holdings and portfolio-level changes.",
    tags: ["TypeScript", "Web3"],
    status: "Featured",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/SCPassion/asset-tracking",
  },
  {
    title: "Saga Profolio",
    description:
      "A portfolio inspection and analytics dashboard tailored for the Saga ecosystem.",
    tags: ["JavaScript", "Saga"],
    status: "Featured",
    image: "/saga.png",
    githubUrl: "https://github.com/SCPassion/saga-profolio",
    demoUrl: "https://saga.scptech.xyz/",
  },
  {
    title: "Pyth Board",
    description:
      "Pyth Board is a dashboard for tracking Pyth staking positions and monitoring the Pyth Strategic Reserve.",
    tags: ["TypeScript", "Pyth Network"],
    status: "Featured",
    image: "/pythnetwork.png",
    githubUrl: "https://github.com/SCPassion/pyth-board",
    demoUrl: "https://pyth.scptech.xyz/",
  },
  {
    title: "Ecommerce App",
    description:
      "A modern ecommerce web application built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["TypeScript", "Next.js"],
    status: "Featured",
    image: "/ecommerce.png",
    githubUrl: "https://github.com/SCPassion/ecommerce-app",
    demoUrl: "https://ecommerce.scptech.xyz/",
  },
];

async function fetchGithub<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function toTitleCaseFromKebab(text: string) {
  return text
    .split("-")
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
}

function toStatusFromPushedAt(pushedAt: string) {
  const date = new Date(pushedAt);
  return `Updated ${date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  })}`;
}

export async function getGithubProfile(): Promise<GithubProfile> {
  const data = await fetchGithub<GithubUserApi>(`/users/${GITHUB_USERNAME}`);

  if (!data) {
    return fallbackProfile;
  }

  return {
    name: data.name || fallbackProfile.name,
    bio: (data.bio || fallbackProfile.bio).replace(/\s+/g, " ").trim(),
    avatarUrl: data.avatar_url || fallbackProfile.avatarUrl,
    githubUrl: data.html_url || fallbackProfile.githubUrl,
    twitterUrl: data.twitter_username
      ? `https://x.com/${data.twitter_username}`
      : fallbackProfile.twitterUrl,
    publicRepos: data.public_repos ?? fallbackProfile.publicRepos,
    followers: data.followers ?? fallbackProfile.followers,
  };
}

export async function getLatestGithubProjects(
  limit = 4
): Promise<GithubProject[]> {
  const data = await fetchGithub<GithubRepoApi[]>(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );

  if (!data || data.length === 0) {
    return fallbackProjects.slice(0, limit);
  }

  const repoMap = new Map(
    data
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => [repo.name, repo])
  );

  const projects = FEATURED_REPO_ORDER.map((repoName) => {
    const repo = repoMap.get(repoName);

    if (!repo) {
      return null;
    }

    return {
      title: projectTitleMap[repo.name] || toTitleCaseFromKebab(repo.name),
      description: repo.description || "No description provided yet.",
      tags: [repo.language || "Code"],
      status: toStatusFromPushedAt(repo.pushed_at),
      image: projectImageMap[repo.name] || "/placeholder.svg",
      githubUrl: repo.html_url,
      demoUrl: repo.homepage && repo.homepage.trim() ? repo.homepage : undefined,
    };
  })
    .filter((project): project is GithubProject => project !== null)
    .slice(0, limit);

  return projects.length > 0 ? projects : fallbackProjects.slice(0, limit);
}
