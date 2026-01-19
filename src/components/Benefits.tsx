 'use client';
 
import { Button } from "./ui/button";
import { Check, ArrowRight, TrendingUp, Globe, Headphones } from "lucide-react";

export function Benefits() {
  const sellerBenefits = [
    "Reach thousands of potential buyers",
    "Easy product listing with image uploads",
    "Real-time sales tracking and analytics",
    "Secure payment processing",
    "Low commission rates",
    "Marketing and promotional tools"
  ];

  const buyerBenefits = [
    "Access to wide variety of batteries",
    "Compare prices from multiple sellers",
    "Verified seller ratings and reviews",
    "Secure checkout and payment",
    "Order tracking and support",
    "Best deals and special offers"
  ];

  return (
    <section
      id="benefits"
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
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of sellers and buyers who trust Parthian Marketplace
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Seller Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">For Sellers</h3>
            </div>
            <div className="space-y-4 mb-8">
              {sellerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Start Selling Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Buyer Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">For Buyers</h3>
            </div>
            <div className="space-y-4 mb-8">
              {buyerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Browse Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Growing Community</h4>
            <p className="text-sm text-muted-foreground">
              Join a thriving marketplace with active sellers and buyers
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Global Reach</h4>
            <p className="text-sm text-muted-foreground">
              Connect with buyers and sellers from around the world
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl border border-border/40">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Dedicated Support</h4>
            <p className="text-sm text-muted-foreground">
              Expert assistance whenever you need help
            </p>
          </div>
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
