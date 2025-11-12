import { Shield, Zap, Award } from "lucide-react";

const About = () => {
  const philosophy = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Clear communication and honest reporting. No hidden fees, no confusing jargon.",
    },
    {
      icon: Zap,
      title: "Agility",
      description:
        "We are built to adapt. The digital world changes fast, and so do we, ensuring you're always ahead of the curve.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We don't settle for 'good enough'. We aim for industry-leading results in every project we touch.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Are The Architects of{" "}
            <span className="gradient-text">Digital Influence.</span>
          </h1>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-slide-up">
          <div className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-xl text-foreground/90 leading-relaxed">
              "To empower ambitious brands to navigate the complexities of the
              digital landscape. We build sustainable growth through innovative
              strategies, cutting-edge technology, and a relentless focus on
              client success."
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Meet the <span className="gradient-text">Strategists</span>
            </h2>
          </div>
          
          <div className="p-10 rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
            <p className="text-xl text-foreground/90 leading-relaxed text-center mb-8">
              "Cresca Media is powered by a collective of digital natives, data
              scientists, creative storytellers, and marketing experts. We bring
              diverse experience from across the industry, united by a single
              passion: growing your business."
            </p>
            
            {/* Abstract team visualization */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary animate-pulse delay-200" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse delay-400" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary animate-pulse delay-600" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse delay-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
