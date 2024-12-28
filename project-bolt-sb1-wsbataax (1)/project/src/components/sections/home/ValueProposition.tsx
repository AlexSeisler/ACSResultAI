import { Clock, TrendingUp, Scale } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Let AI handle repetitive tasks like appointment scheduling and client follow-ups."
  },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description: "Capture every lead with 24/7 support and smart CRM integrations."
  },
  {
    icon: Scale,
    title: "Scale Effortlessly",
    description: "Our solutions grow with your business, no matter the size."
  }
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-navy-700">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why Home Service Pros Choose ACSResults.ai
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <value.icon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}