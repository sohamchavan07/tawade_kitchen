import { Heart, Award, Users, Sparkles } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every snack is prepared with care and traditional recipes",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients for authentic taste",
    },
    {
      icon: Users,
      title: "Family Recipe",
      description: "Recipes passed down through generations",
    },
    {
      icon: Sparkles,
      title: "Fresh Daily",
      description: "Made fresh to ensure maximum taste and quality",
    },
  ];

  return (
    <section id="about-us" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Why Choose Tawade Kitchen?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience the authentic taste of homemade Indian snacks, crafted with tradition and love
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg bg-card p-6 text-center shadow-soft transition-all hover:shadow-warm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-hero-gradient">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-3xl font-bold text-foreground">
              Our Story
            </h3>
            <p className="mb-4 text-lg text-foreground">
              Tawade Kitchen was born from a passion for preserving traditional Indian flavors and sharing them with the world. What started as a small family kitchen has grown into a beloved brand, trusted by thousands for authentic, homemade taste.
            </p>
            <p className="text-lg text-muted-foreground">
              Every product we make carries the warmth of our grandmother's kitchen and the authenticity of time-honored recipes. We believe that great food brings people together, and we're honored to be part of your celebrations and everyday moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
