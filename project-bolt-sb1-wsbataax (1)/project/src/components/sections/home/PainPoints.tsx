import { PhoneOff, Calendar, Database } from "lucide-react";

const painPoints = [
  {
    icon: PhoneOff,
    title: "Missed Calls",
    description: "Lost leads due to unresponsive customer service."
  },
  {
    icon: Calendar,
    title: "Overbooked Schedules",
    description: "Wasted time juggling appointments."
  },
  {
    icon: Database,
    title: "Disorganized Client Data",
    description: "CRM chaos that slows you down."
  }
];

export function PainPoints() {
  return (
    <section className="py-24 bg-navy-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          The Everyday Struggles of Home Service Businesses
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div key={point.title} className="bg-navy-700/50 rounded-lg p-6 border border-teal-400/20">
              <point.icon className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-gray-300 text-center mt-12 max-w-2xl mx-auto">
          ACSResults.ai specializes in automating the processes that slow you down, 
          so you can focus on delivering top-notch service to your clients.
        </p>
      </div>
    </section>
  );
}