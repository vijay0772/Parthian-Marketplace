'use client';

import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section
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
      <div className="absolute inset-0 cta-hero-bg-grid opacity-5 z-0"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="cta-hero-blob cta-hero-blob-1"></div>
        <div className="cta-hero-blob cta-hero-blob-2"></div>
        <div className="cta-hero-blob cta-hero-blob-3"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 cta-cursor-spot"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-8 py-16 md:px-16 md:py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Thousands of Sellers & Buyers on Parthian Marketplace
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to sell batteries or find the perfect power solution, 
              Parthian Marketplace is your trusted platform for success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              >
                Start Selling Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8"
              >
                Explore Marketplace
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/80">
              No credit card required • Free plan available • Get started in minutes
            </p>
          </div>

          <style jsx>{`
            .bg-grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
              background-size: 4rem 4rem;
            }
            .cta-hero-bg-grid {
              background-image: 
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
              background-size: 4rem 4rem;
              animation: grid-pan 60s linear infinite;
            }
            .cta-hero-blob {
              position: absolute;
              border-radius: 9999px;
              filter: blur(80px);
              opacity: 0.32;
              background: radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 60%);
            }
            .cta-hero-blob-1 {
              width: 46vw;
              height: 46vw;
              top: -10%;
              left: -10%;
              animation: float-a 28s ease-in-out infinite alternate;
            }
            .cta-hero-blob-2 {
              width: 36vw;
              height: 36vw;
              right: -8%;
              top: 20%;
              animation: float-b 32s ease-in-out infinite alternate;
              opacity: 0.14;
            }
            .cta-hero-blob-3 {
              width: 30vw;
              height: 30vw;
              bottom: -12%;
              left: 20%;
              animation: float-c 26s ease-in-out infinite alternate;
              opacity: 0.12;
            }
            .cta-cursor-spot {
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
              .cta-cursor-spot {
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
        </div>
      </div>
    </section>
  );
}
