import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Authentic connections that drive real engagement.",
    },
    {
      icon: Target,
      title: "Social Media Management",
      description: "Building and nurturing your brand's community.",
    },
    {
      icon: Lightbulb,
      title: "Content Strategy",
      description: "Content that captivates, converts, and climbs ranks.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-first campaigns focused purely on ROI.",
    },
  ];

  const differences = [
    {
      title: "Results, Not Just Reports",
      description:
        "We are obsessed with your ROI. Our success is measured by your growth, not just by vanity metrics.",
    },
    {
      title: "Partners, Not Vendors",
      description:
        "We operate as an extension of your team. Your goals become our goals.",
    },
    {
      title: "Data-Driven Creativity",
      description:
        "We blend analytics with artistry to create campaigns that resonate and convert.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Animated background circles */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Animated Logo Video */}
            <div className="mb-8 flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-auto"
              >
                <source src="/assets/cresca-media.mp4" type="video/mp4" />
              </video>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              We Don't Just Build Brands.
              <br />
              <span className="gradient-text">We Architect Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cresca Media is your strategic partner in the digital age. We
              leverage data-driven strategies and creative content to connect you
              with your audience and deliver measurable results.
            </p>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-Funnel <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategies that cover every touchpoint of your
              customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Cresca Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differences.map((item, index) => (
              <div
                key={item.title}
                className="text-center space-y-4 p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold gradient-text">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="gradient-text">Scale Your Brand?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop guessing. Start growing. Let's talk about how Cresca Media can
              unlock your brand's true potential.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary hover:glow-effect-strong text-lg px-10 py-6 transition-all duration-300">
                Get in Touch Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
