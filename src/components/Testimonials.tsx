 'use client';
 
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Battery Seller",
      company: "PowerCell Solutions",
      content: "Parthian Marketplace has transformed my business. The platform is intuitive, and I can easily manage my inventory and track sales. My revenue has increased by 300% in just 6 months!",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "James Rodriguez",
      role: "Procurement Manager",
      company: "TechWave Industries",
      content: "As a buyer, I love the variety and transparency. Being able to compare different batteries from verified sellers saves me time and money. The ordering process is seamless!",
      rating: 5,
      avatar: "JR"
    },
    {
      name: "Emily Chen",
      role: "E-commerce Entrepreneur",
      company: "GreenEnergy Store",
      content: "The analytics dashboard is a game-changer! I can see exactly what's selling, track my profits, and make data-driven decisions. Best marketplace platform I've used.",
      rating: 5,
      avatar: "EC"
    },
    {
      name: "Michael Kumar",
      role: "Fleet Manager",
      company: "AutoFleet Corp",
      content: "Purchasing batteries for our entire fleet has never been easier. The bulk ordering feature and reliable sellers make Parthian our go-to marketplace.",
      rating: 5,
      avatar: "MK"
    },
    {
      name: "Lisa Thompson",
      role: "Battery Distributor",
      company: "BatteryHub",
      content: "The seller tools are exceptional. From product uploads to customer communication, everything is streamlined. I've built a loyal customer base through this platform.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "David Park",
      role: "Operations Director",
      company: "Industrial Solutions",
      content: "Trust and security are paramount for us, and Parthian delivers. The verification process and secure payments give us peace of mind with every transaction.",
      rating: 5,
      avatar: "DP"
    }
  ];

  return (
    <section
      id="testimonials"
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
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our sellers and buyers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Sellers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Buyers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100K+</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
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
