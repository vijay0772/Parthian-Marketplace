 'use client';
 
import { 
  Store, 
  ShoppingCart, 
  BarChart3, 
  Image, 
  Package, 
  Users,
  Shield,
  Zap,
  Clock
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Store,
      title: "Seller Profiles",
      description: "Create comprehensive seller profiles with business information, ratings, and verified badges"
    },
    {
      icon: Image,
      title: "Product Management",
      description: "Upload multiple product images, detailed specifications, and manage inventory effortlessly"
    },
    {
      icon: Package,
      title: "Order Tracking",
      description: "Real-time order status updates and shipment tracking for both sellers and buyers"
    },
    {
      icon: ShoppingCart,
      title: "Smart Shopping Cart",
      description: "Intuitive cart system with saved items, bulk ordering, and secure checkout process"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights on sales, buyer behavior, inventory levels, and revenue trends"
    },
    {
      icon: Users,
      title: "Admin Control",
      description: "Powerful admin dashboard to manage sellers, buyers, products, and platform operations"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment gateway for safe and trusted transactions"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time alerts for new orders, messages, price changes, and important updates"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help sellers and buyers with any issues"
    }
  ];

  return (
    <section
      id="features"
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
            <span className="text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-primary"> Buy & Sell </span>
            Batteries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for sellers, buyers, and administrators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
