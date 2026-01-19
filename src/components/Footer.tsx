import { Battery, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const footerLinks = {
    marketplace: [
      { name: "Browse Batteries", href: "#" },
      { name: "Sell Products", href: "#" },
      { name: "Become a Seller", href: "#" },
      { name: "Pricing Plans", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Seller Guide", href: "#" },
      { name: "Buyer Guide", href: "#" },
      { name: "API Documentation", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Battery className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">
                Parthian <span className="text-primary">Marketplace</span>
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              The premier platform connecting battery sellers and buyers worldwide. 
              Trusted, secure, and built for growth.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-3">
              {footerLinks.marketplace.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-background/70">
                Get the latest marketplace news and seller tips
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-background/50" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
          <p>© 2026 Parthian Marketplace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
