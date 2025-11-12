import { Users, MessageSquare, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Influencer Marketing & Talent Management",
      description:
        "We move beyond sponsored posts. We identify, vet, and manage authentic creators who truly resonate with your audience. We manage the entire process from negotiation to content approval and detailed ROI analysis.",
      keywords: [
        "Campaign Strategy",
        "Talent Sourcing & Vetting",
        "Content Amplification",
        "Performance Tracking",
        "Contract Negotiation",
      ],
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description:
        "Your social media should be a revenue driver, not just a billboard. We develop comprehensive content calendars, engage your community in real-time, and transform followers into loyal customers.",
      keywords: [
        "Community Engagement",
        "Content Creation",
        "Paid Social Advertising",
        "Social Listening",
        "Monthly Reporting",
      ],
    },
    {
      icon: FileText,
      title: "Content Strategy & Creation",
      description:
        "Content is the fuel for your marketing engine. We create high-performance content—from compelling videos and graphics to SEO-optimized blog posts—that captures attention and builds authority.",
      keywords: [
        "Video Production",
        "SEO Copywriting",
        "Graphic Design",
        "Content Audits",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital marketing services designed to drive measurable
            growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group p-8 md:p-12 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in">
          <div className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss which solutions are right for your business.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg gradient-primary hover:glow-effect-strong font-semibold transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
