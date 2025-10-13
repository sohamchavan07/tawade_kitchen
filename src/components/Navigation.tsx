import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = ["Home", "Products", "About Us", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-soft">
      {/* Announcement Bar */}
      <div className="bg-hero-gradient py-2 text-center">
        <p className="text-sm font-medium text-primary-foreground">
          Welcome to Tawade Kitchen - Authentic Homemade Taste! 🎉
        </p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary md:text-3xl">
              Tawade Kitchen
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};