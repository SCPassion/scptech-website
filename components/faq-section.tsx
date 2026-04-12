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
        "SCPTech is my personal builder brand and project hub. It brings together my work across AI-assisted tooling, realtime data products, and Web3-oriented software.",
    },
    {
      question: "What kind of work do you do?",
      answer:
        "I build full-stack products end to end, from frontend interfaces and application logic to backend services, deployment loops, and ongoing iteration. A lot of that work touches data-heavy dashboards, automation, and crypto-native workflows.",
    },
    {
      question: "What does SCPTech focus on most?",
      answer:
        "The strongest themes right now are AI workflows, market-data interfaces, Web3 integrations, and protocol-adjacent tooling. The specific projects vary, but the thread is always practical execution and usable product design.",
    },
    {
      question: "Which ecosystems or communities have shaped your work?",
      answer:
        "My recent context includes Pyth and Fogo, with earlier community experience as a Saga ambassador and ex-NodeStake community contributor.",
    },
    {
      question: "Where can I see your work?",
      answer:
        "This site highlights a few featured builds, and the broader picture lives on GitHub at SCPassion, where I keep active repositories, experiments, and ongoing product work.",
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
            Quick context on who I am, what SCPTech is, and what I build
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6 modern-shadow hover-color-shift transition-colors duration-150 ease-out"
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
