'use client';

import { Button } from "./ui/button";
import { Menu, X, Battery, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Mock user type - in real app this would come from auth context
  const userType: string | null = "buyer"; // Can be "seller", "buyer", or null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Battery className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-3xl md:text-3xl font-semibold text-foreground">
              Parthian <span className="text-primary">Marketplace</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
          <Link href="#hero" className="text-lg text-foreground/80 hover:text-primary transition-colors">
              Marketplace
            </Link>
            <a href="#how-it-works" className="text-lg text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-sellers" className="text-lg text-foreground/80 hover:text-primary transition-colors">
              For Sellers
            </a>
            <a href="#for-buyers" className="text-lg text-foreground/80 hover:text-primary transition-colors">
              For Buyers
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            
            {userType ? (
              <>
                {/*
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="h-5 w-5 mr-2" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {userType === "seller" ? (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/seller/dashboard" className="cursor-pointer">
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/seller/products" className="cursor-pointer">
                            My Products
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/seller/orders" className="cursor-pointer">
                            Orders
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/seller/profile" className="cursor-pointer">
                            Profile Settings
                          </Link>
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/buyer/orders" className="cursor-pointer">
                            My Orders
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/buyer/profile" className="cursor-pointer">
                            Profile Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/cart" className="cursor-pointer">
                            Shopping Cart
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                */}
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#for-sellers" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                For Sellers
              </a>
              <a href="#for-buyers" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                For Buyers
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
                {userType ? (
                  <>
                    {userType === "seller" ? (
                      <>
                        <Link href="/seller/dashboard">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            Dashboard
                          </Button>
                        </Link>
                        <Link href="/seller/products">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            My Products
                          </Button>
                        </Link>
                        <Link href="/seller/orders">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            Orders
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        {/*
                        <Link href="/buyer/orders">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            My Orders
                          </Button>
                        </Link>
                        */}
                        
                      </>
                    )}
                    {/*
                    <Button variant="ghost" size="sm" className="w-full justify-start text-destructive">
                      Sign Out
                    </Button>
                    */}
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="w-full">
                      Sign In
                    </Button>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}