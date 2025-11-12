import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Influencer Marketing",
    "Social Media Management",
    "Content Strategy",
    "Performance Marketing",
  ];

  return (
    <footer className="relative bg-card border-t border-border mt-20">
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src="/assets/cresca-media.png"
              alt="Cresca Media"
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              We architect growth through data-driven strategies and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/crescamedia?igsh=MTk3dTRnOXVmbnJwYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  FAQs
                </span>
              </li>
              <li>
                <a
                  href="mailto:hello@crescamedia.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Cresca Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
