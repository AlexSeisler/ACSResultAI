import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "Industry-leading AI expertise",
  "Proven track record of success",
  "Customized solutions for your needs",
  "Dedicated support team",
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-teal-900/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About ACSResults.ai
            </h2>
            <p className="text-gray-300 mb-8">
              We're on a mission to revolutionize businesses through intelligent automation. 
              Our team of experts combines cutting-edge AI technology with deep industry 
              knowledge to deliver solutions that drive real results.
            </p>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur-3xl" />
            <Card className="relative bg-navy-700/50 border-teal-400/20 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}