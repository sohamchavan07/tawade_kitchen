import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">
              Tawade Kitchen
            </h3>
            <p className="text-sm text-background/80">
              Authentic homemade Indian snacks made with love and traditional recipes. 
              Bringing the taste of home to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/80 hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-background/80 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-primary">
Best Qualitity                </a>
              </li>
             
              <li>
                <a href="#" className="text-background/80 hover:text-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex space-x-4">
            
             
             
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {currentYear} Tawade Kitchen. All rights reserved. Made by{" "}
            <a
              href="https://www.sohamchavan.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SOHAM.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
