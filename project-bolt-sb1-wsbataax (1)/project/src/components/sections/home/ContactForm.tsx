import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const businessTypes = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Landscaping",
  "Contracting",
  "Cleaning",
  "Other"
];

const services = [
  "Customer Support Automation",
  "Appointment Setting",
  "CRM Integration",
  "All Services"
];

export function ContactForm() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-500/20 via-navy to-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Let's Grow Your Business Together
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            Schedule a free consultation to see how AI can transform your operations.
          </p>
          
          <form className="space-y-6">
            <Input
              type="text"
              placeholder="Business Name"
              className="bg-navy-700/50 border-teal-400/20"
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-navy-700/50 border-teal-400/20"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-navy-700/50 border-teal-400/20"
            />

            <div className="space-y-4">
              <Label className="text-lg font-medium text-white">Business Type</Label>
              <RadioGroup defaultValue="other" className="grid grid-cols-2 gap-4">
                {businessTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-lg border border-teal-400/20 hover:border-teal-400/40 transition-colors">
                    <RadioGroupItem 
                      value={type.toLowerCase()} 
                      id={`type-${type.toLowerCase()}`}
                      className="border-teal-400 text-teal-400 data-[state=checked]:bg-teal-400 data-[state=checked]:text-navy"
                    />
                    <Label htmlFor={`type-${type.toLowerCase()}`} className="text-gray-300 cursor-pointer">
                      {type}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-medium text-white">Service Interest</Label>
              <RadioGroup defaultValue="all-services" className="grid gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-lg border border-teal-400/20 hover:border-teal-400/40 transition-colors">
                    <RadioGroupItem 
                      value={service.toLowerCase().replace(/\s+/g, '-')} 
                      id={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="border-teal-400 text-teal-400 data-[state=checked]:bg-teal-400 data-[state=checked]:text-navy"
                    />
                    <Label htmlFor={`service-${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button
              size="lg"
              className="w-full bg-teal-500 hover:bg-teal-400 text-white"
            >
              Get My Free Demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}