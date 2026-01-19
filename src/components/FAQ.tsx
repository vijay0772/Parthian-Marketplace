 'use client';
 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How do I start selling on Parthian Marketplace?",
      answer: "Getting started is easy! Simply sign up for an account, complete your seller profile with business details, and you can start listing your battery products. Upload product images, add specifications and pricing, and your products will be live on the marketplace."
    },
    {
      question: "What types of batteries can I sell or buy?",
      answer: "Parthian Marketplace supports all types of batteries including lithium-ion, lead-acid, alkaline, rechargeable batteries, automotive batteries, industrial batteries, and specialty batteries. Each listing can include detailed specifications to help buyers find exactly what they need."
    },
    {
      question: "How does the payment process work?",
      answer: "Buyers make secure payments through our integrated payment gateway. For sellers, funds are held securely and released according to our payment schedule (typically 2-3 business days after delivery confirmation). All transactions are encrypted and protected."
    },
    {
      question: "Can I track my orders and inventory?",
      answer: "Yes! Sellers have access to a comprehensive dashboard where you can track inventory levels, manage orders, view sales analytics, and monitor product performance. Buyers can track their orders from purchase to delivery with real-time updates."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer different support levels based on your plan. Free users get standard email support, Professional users get priority support with faster response times, and Enterprise customers get 24/7 premium support with a dedicated account manager."
    },
    {
      question: "How are sellers verified?",
      answer: "All sellers go through a verification process that includes business documentation review, identity verification, and compliance checks. Verified sellers receive a badge on their profile, helping buyers make informed decisions. Our admin team continuously monitors seller performance."
    },
    {
      question: "Can I customize my seller profile and storefront?",
      answer: "Absolutely! Professional and Enterprise plans offer enhanced customization options including custom branding, featured product sections, and personalized storefronts. You can add your logo, business description, policies, and showcase your best-selling products."
    },
    {
      question: "What happens if there's an issue with a transaction?",
      answer: "We have a robust dispute resolution process. Buyers and sellers can communicate through our platform, and our admin team is available to mediate any issues. We also offer buyer protection and seller protection policies to ensure fair outcomes."
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-28"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--mx", `${x}px`);
        e.currentTarget.style.setProperty("--my", `${y}px`);
      }}
      onTouchMove={(e) => {
        const touch = e.touches?.[0];
        if (!touch) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        e.currentTarget.style.setProperty("--mx", `${x}px`);
        e.currentTarget.style.setProperty("--my", `${y}px`);
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 cursor-spot"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Parthian Marketplace
          </p>
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/40 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <p className="text-sm text-muted-foreground">
            Contact our support team at{" "}
            <a href="mailto:support@parthianmarketplace.com" className="text-primary hover:underline">
              support@parthianmarketplace.com
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
          animation: grid-pan 60s linear infinite;
        }

        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.32;
          background: radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 60%);
        }

        .hero-blob-1 {
          width: 46vw;
          height: 46vw;
          top: -10%;
          left: -10%;
          animation: float-a 28s ease-in-out infinite alternate;
        }

        .hero-blob-2 {
          width: 36vw;
          height: 36vw;
          right: -8%;
          top: 20%;
          animation: float-b 32s ease-in-out infinite alternate;
          opacity: 0.14;
        }

        .hero-blob-3 {
          width: 30vw;
          height: 30vw;
          bottom: -12%;
          left: 20%;
          animation: float-c 26s ease-in-out infinite alternate;
          opacity: 0.12;
        }

        .cursor-spot {
          --mx: 50%;
          --my: 50%;
          background: radial-gradient(
            circle 380px at var(--mx) var(--my),
            var(--primary),
            transparent 60%
          );
          opacity: 0.24;
          transition: opacity 150ms ease;
        }
        @supports (color: color-mix(in lab, red, red)) {
          .cursor-spot {
            background: radial-gradient(
              circle 400px at var(--mx) var(--my),
              color-mix(in oklab, var(--primary) 35%, transparent),
              transparent 60%
            );
            opacity: 1;
          }
        }

        @keyframes grid-pan {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 4rem 0, 0 4rem; }
        }

        @keyframes float-a {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(6%, 4%, 0) scale(1.05); }
        }

        @keyframes float-b {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(-5%, -6%, 0) scale(1.08); }
        }

        @keyframes float-c {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(8%, -4%, 0) scale(1.04); }
        }
      `}</style>
    </section>
  );
}
