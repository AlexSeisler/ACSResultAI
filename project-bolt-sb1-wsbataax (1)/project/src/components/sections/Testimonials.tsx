import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ACSResults.ai transformed our business operations with their innovative AI solutions. The results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
  },
  {
    quote: "The team's expertise in AI automation helped us achieve significant cost savings and improved efficiency.",
    author: "Michael Chen",
    position: "CTO, InnovateX",
  },
  {
    quote: "Outstanding service and cutting-edge solutions. They truly understand the power of AI in business.",
    author: "Emma Williams",
    position: "Operations Director, FutureFlow",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-teal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-navy-800/50 border-teal-400/20 h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-teal-400 mb-4" />
                    <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}