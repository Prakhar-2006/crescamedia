import { Search, Layout, Rocket, BarChart3 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description:
        "We dive deep to understand your brand, audience, and commercial goals. Through comprehensive research and analysis, we identify opportunities and challenges that will shape our strategy.",
    },
    {
      number: "02",
      icon: Layout,
      title: "Strategy",
      description:
        "We build a bespoke, data-driven plan designed to meet your specific objectives. Every strategy is tailored to your unique market position and growth targets.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute",
      description:
        "Our team brings the strategy to life, launching campaigns, creating content, and engaging your audience. We handle every detail with precision and creativity.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Analyze & Optimize",
      description:
        "We track the data, report on what's working, and optimize campaigns in real-time for maximum results. Continuous improvement is built into everything we do.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            A Proven Framework for{" "}
            <span className="gradient-text">Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Our systematic approach ensures every project delivers measurable
            results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-16 top-32 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                {/* Number & Icon */}
                <div className="flex-shrink-0 space-y-4">
                  <div className="text-6xl font-bold gradient-text">
                    {step.number}
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 inline-block">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center animate-fade-in">
          <div className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the{" "}
              <span className="gradient-text">Cresca Process?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's start with a free strategy audit to map your path to growth.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg gradient-primary hover:glow-effect-strong font-semibold transition-all duration-300"
            >
              Book Your Free Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
