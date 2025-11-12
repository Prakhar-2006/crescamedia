import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    toast({
      title: "Subscribed!",
      description: "You're now subscribed to our newsletter.",
    });
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Great Together.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to take your brand to the next level? Get in touch.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Service Interested In
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="influencer">
                          Influencer Marketing
                        </SelectItem>
                        <SelectItem value="social">
                          Social Media Management
                        </SelectItem>
                        <SelectItem value="content">
                          Content Strategy
                        </SelectItem>
                        <SelectItem value="performance">
                          Performance Marketing
                        </SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Project Details *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      className="bg-background/50 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:glow-effect-strong transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Details */}
              <div className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Email Us</p>
                      <a
                        href="mailto:hello@crescamedia.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@crescamedia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Location</p>
                      <p className="text-muted-foreground">
                        Greater Noida, Uttar Pradesh
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for the latest insights and
                  strategies.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-4"
                >
                  <Input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-background/50"
                  />
                  <Button
                    type="submit"
                    className="w-full gradient-primary hover:glow-effect transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
