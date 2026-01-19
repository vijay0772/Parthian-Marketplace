'use client';

import { Button } from "./ui/button";
import { ArrowRight, Battery, ShoppingBag, TrendingUp, Shield } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      {/* Ambient animated blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>
      {/* Cursor reactive highlight */}
      <div className="absolute inset-0 pointer-events-none z-0 cursor-spot"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Battery className="h-4 w-4" />
              <span className="text-sm">The Future of Battery Trading</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect Battery
                <span className="text-primary"> Sellers </span>
                &
                <span className="text-primary"> Buyers </span>
                Seamlessly
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Parthian Marketplace is the premier platform for battery commerce. 
                Sellers showcase products, buyers discover quality batteries, and 
                admins ensure a trusted ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Selling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/5">
                Browse Batteries
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Active Sellers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Products Listed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">For Sellers</h3>
              <p className="text-sm text-muted-foreground">
                Create profiles, upload products with images, and track sales effortlessly
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-lg transition-shadow mt-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">For Buyers</h3>
              <p className="text-sm text-muted-foreground">
                Browse diverse batteries, add to cart, and purchase with confidence
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Real-time insights and comprehensive dashboard for all users
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-lg transition-shadow mt-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Trusted</h3>
              <p className="text-sm text-muted-foreground">
                Admin oversight ensures quality, safety, and trust in every transaction
              </p>
            </div>
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
