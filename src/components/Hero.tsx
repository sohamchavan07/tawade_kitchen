import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);
  const railsBase = (import.meta as any).env?.VITE_RAILS_BASE_URL || ""; // empty = same origin / reverse-proxied
  const signInUrl = `${railsBase}/users/sign_in`;

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[600px] md:h-[700px]">
        <img
          src={heroBanner}
          alt="Delicious homemade Indian snacks"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />

        {/* Profile menu moved to top navigation */}

        <div className="container absolute inset-0 mx-auto flex items-center px-4">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                You're Welcome To
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-1 bg-hero-gradient" />
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                TAWADE KITCHEN
              </h1>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-medium text-primary md:text-2xl">
                YOUR ONE STOP
              </p>
              <p className="bg-hero-gradient bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                SNACK SHOP
              </p>
              <p className="text-xl text-foreground md:text-2xl">
                FOR ALL YOUR
              </p>
              <p className="text-xl text-foreground md:text-2xl">
                SNACKING NEEDS
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <a href={signInUrl} onClick={handleButtonClick}>Sign In</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`${railsBase}/users/sign_up`} onClick={handleButtonClick} className="inline-flex items-center gap-2">
                  <span>Sign Up</span>
                  <ArrowRight />
                </a>
              </Button>
            </div>

            {showMessage && (
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm text-amber-800 font-medium">
                  We are currently working on this. Thanks for your patience! 🙏
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
