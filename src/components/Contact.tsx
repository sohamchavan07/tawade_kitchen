import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 9860002903",
      link: "tel:+9860002903",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "tawadekitchen@gmail.com",
      link: "mailto:tawadekitchen@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Kolhapur, Maharashtra",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Sun: 9 AM - 8 PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions or special requests? We'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">
              Send us a Message
            </h3>
            <form
              action="https://formspree.io/f/xldporro"
              method="POST"
              className="space-y-4"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-hero-gradient font-semibold shadow-warm transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a key={info.title} href={info.link} className="block">
                <Card className="group p-6 transition-all hover:shadow-warm">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hero-gradient">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
