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
        "SCPTech is a Web3 technology entity focused on building innovative blockchain solutions, decentralized applications, and infrastructure for the next generation of the internet. We specialize in DeFi protocols, NFT platforms, DAO governance, and cross-chain solutions.",
    },
    {
      question: "How can I contribute to SCPTech projects?",
      answer:
        'We welcome contributions from developers of all skill levels! You can start by exploring our open-source repositories on GitHub, joining our Discord community, and checking out our contribution guidelines. We have issues labeled "good first issue" for newcomers.',
    },
    {
      question: "What blockchain networks does SCPTech support?",
      answer:
        "We build on multiple blockchain networks including Ethereum, Polygon, Binance Smart Chain, Solana, and other EVM-compatible chains. Our cross-chain solutions enable seamless interoperability between these networks.",
    },
    {
      question: "Are your smart contracts audited?",
      answer:
        "Yes, security is our top priority. All our production smart contracts undergo rigorous internal reviews and third-party security audits by reputable firms. Audit reports are publicly available in our documentation.",
    },
    {
      question: "How do I get started with Web3 development?",
      answer:
        "We provide comprehensive documentation, tutorials, and starter templates to help you begin your Web3 journey. Check out our developer resources section for guides on smart contract development, dApp creation, and blockchain integration.",
    },
    {
      question: "Does SCPTech offer consulting services?",
      answer:
        "Yes, we offer consulting services for organizations looking to integrate blockchain technology, build custom DeFi solutions, or develop NFT platforms. Contact us through our website to discuss your project requirements.",
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
