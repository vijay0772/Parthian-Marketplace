 'use client';
 
import { UserPlus, Upload, LineChart, ShoppingCart, Search, CreditCard } from "lucide-react";

export function HowItWorks() {
  const sellerSteps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Sign up and set up your seller profile with business details"
    },
    {
      icon: Upload,
      title: "Upload Products",
      description: "Add battery listings with detailed specs, images, and pricing"
    },
    {
      icon: LineChart,
      title: "Track & Manage",
      description: "Monitor sales, inventory, and customer interactions in real-time"
    }
  ];

  const buyerSteps = [
    {
      icon: Search,
      title: "Browse Batteries",
      description: "Explore a wide range of batteries from verified sellers"
    },
    {
      icon: ShoppingCart,
      title: "Add to Cart",
      description: "Select products and add them to your shopping cart"
    },
    {
      icon: CreditCard,
      title: "Secure Purchase",
      description: "Complete your order with secure payment and fast delivery"
    }
  ];

  return (
    <section
      id="how-it-works"
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
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Parthian Marketplace Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're selling or buying batteries, our platform makes it easy and efficient
          </p>
        </div>

        {/* For Sellers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-primary">For Sellers</span> - Start Selling in 3 Easy Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sellerSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < sellerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/60 to-primary/20"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Buyers */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-primary">For Buyers</span> - Shop with Confidence
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {buyerSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < buyerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/60 to-primary/20"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
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
