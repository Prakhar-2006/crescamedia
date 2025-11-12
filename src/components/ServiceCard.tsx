import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default ServiceCard;
