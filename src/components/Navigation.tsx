import { FormEvent, useState } from "react";
import { Menu, X, ShoppingCart, Search, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { productKeywords, products as productList } from "@/data/products";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = ["Home", "Products", "About Us", "Contact"];
  const [searchQuery, setSearchQuery] = useState("");
  const railsBase = (import.meta as any).env?.VITE_RAILS_BASE_URL || "";
  const signInUrl = `${railsBase}/users/sign_in`;

  const handleLogout = async () => {
    try {
      if (railsBase) {
        await fetch(`${railsBase}/users/sign_out`, {
          method: "DELETE",
          credentials: "include",
          headers: { Accept: "application/json" },
        }).catch(() => {});
      }
    } finally {
      try { localStorage.clear(); } catch {}
      try { sessionStorage.clear(); } catch {}
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substring(0, eqPos) : c;
        document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });
      window.location.assign(signInUrl);
    }
  };

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
            {navItems.map((item) => {
              const hash = `#${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={item}
                  to={{ pathname: "/", hash }}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              );
            })}
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

            {/* Auth Links */}
            <Link
              to="/users/sign_in"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:inline-block"
            >
              Sign in
            </Link>
            <Link
              to="/users/sign_up"
              className="hidden rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 md:inline-block"
            >
              Sign up
            </Link>

            {/* Profile menu */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button aria-label="Open profile menu" className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring">
                    <Avatar>
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          

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
            {navItems.map((item) => {
              const hash = `#${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={item}
                  to={{ pathname: "/", hash }}
                  className="block py-2 text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-3">
              <Link
                to="/users/sign_in"
                className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/users/sign_up"
                className="flex-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
              <button
                onClick={() => { setIsMenuOpen(false); handleLogout(); }}
                className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};