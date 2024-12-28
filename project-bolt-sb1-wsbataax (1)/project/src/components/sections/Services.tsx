import {
  Brain,
  Cog,
  BarChart3,
  Workflow,
  Bot,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Process Automation",
    description: "Streamline your workflows with intelligent automation solutions",
    icon: Workflow,
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems",
    icon: Brain,
  },
  {
    title: "Custom Solutions",
    description: "Tailored AI solutions designed for your specific needs",
    icon: Cog,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: BarChart3,
  },
  {
    title: "Chatbot Development",
    description: "Intelligent conversational AI for customer engagement",
    icon: Bot,
  },
  {
    title: "AI Consulting",
    description: "Expert guidance on AI strategy and implementation",
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business operations and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-navy-700 border-teal-400/20 hover:border-teal-400/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-teal-400/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-teal-400" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}