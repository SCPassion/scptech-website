import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What is SCPTech?",
      answer:
        "SCPTech is a Web3 technology entity specializing in monitoring dashboards, Oracle Integrity Staking analytics, and blockchain infrastructure tools. We build custom solutions for Pyth Network, Saga ecosystem, and other blockchain protocols to provide real-time insights and performance tracking.",
    },
    {
      question: "What monitoring tools does SCPTech offer?",
      answer:
        "We develop comprehensive dashboards for Oracle Integrity Staking tracking, PythenianNFT partnership monitoring, and AMM protocol analytics. Our tools provide real-time insights into staking performance, wallet statistics, and blockchain ecosystem health across multiple networks.",
    },
    {
      question: "Which blockchain ecosystems does SCPTech support?",
      answer:
        "We specialize in Pyth Network oracle solutions, Saga blockchain tools, and multi-ecosystem support. Our monitoring tools work across Solana, Cosmos, and other emerging blockchain networks, providing cross-chain analytics and performance tracking.",
    },
    {
      question: "How accurate are your monitoring dashboards?",
      answer:
        "Our dashboards provide real-time data with high accuracy and low latency. We use direct blockchain data sources and implement robust error handling to ensure reliable monitoring for critical DeFi operations and staking activities.",
    },
    {
      question: "How can I contribute to SCPTech projects?",
      answer:
        "We welcome contributions from developers of all skill levels! You can start by exploring our open-source repositories on GitHub.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-xl text-muted-foreground">
            Everything you need to know about SCPTech
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border-2 border-border bg-card px-6 modern-shadow hover-color-shift transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
