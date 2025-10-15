import { FormEvent, useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { productKeywords, products as productList } from "@/data/products";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = ["Home", "Products", "About Us", "Contact"];
  const [searchQuery, setSearchQuery] = useState("");

  // productList imported from shared data

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
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              aria-expanded={isSearchOpen}
              aria-controls="site-search"
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
            <form
              role="search"
              aria-label="Site search"
              onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  const q = searchQuery.trim().toLowerCase();

                  if (!q) return;

                  // try to find by id/name/keywords
                  const match = productList.find((p) => {
                    if (p.id && p.id === q) return true;
                    if (p.name && p.name.toLowerCase().includes(q)) return true;
                    if (p.keywords && p.keywords.some((k) => k.toLowerCase().includes(q))) return true;
                    return false;
                  });

                  if (match && match.id) {
                    const el = document.getElementById(match.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                      // also focus for keyboard users
                      (el as HTMLElement).focus({ preventScroll: true });
                      return;
                    }
                  }

                  // fallback
                  console.log("Search submitted:", searchQuery);
                }}
            >
              <label htmlFor="site-search" className="sr-only">
                Search products
              </label>
              <Input
                id="site-search"
                name="q"
                list="product-keywords"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                placeholder="Search for products..."
                aria-label="Search products"
                className="w-full"
              />

              {/* datalist provides built-in browser suggestions based on product keywords */}
              <datalist id="product-keywords">
                {productKeywords.map((k) => (
                  <option key={k} value={k} />
                ))}
              </datalist>

              {/* visible submit for keyboard users; can be hidden visually if desired */}
              <button type="submit" className="sr-only">
                Submit search
              </button>
            </form>
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