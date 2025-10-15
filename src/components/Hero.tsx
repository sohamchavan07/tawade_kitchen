import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { RefObject } from "react";

export const Hero = ({
  signInRef,
  signUpRef,
}: {
  signInRef?: RefObject<HTMLButtonElement>;
  signUpRef?: RefObject<HTMLButtonElement>;
}) => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[600px] md:h-[700px]">
        <img
          src={heroBanner}
          alt="Delicious homemade Indian snacks"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />

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

            {/* Sign In / Sign Up actions in hero (exposed via refs) */}
            <div className="mt-6 flex items-center space-x-4">
              <Button
                ref={signInRef as any}
                onClick={() => {
                  // navigate to Rails sign in page
                  if (typeof window !== "undefined") {
                    window.location.href = "http://[::1]:3000/users/sign_in";
                  }
                }}
                variant="outline"
                className="hidden md:inline-flex"
                aria-label="Sign in"
              >
                Sign In
              </Button>

              <Button
                ref={signUpRef as any}
                className="inline-flex"
                aria-label="Sign up"
              >
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
