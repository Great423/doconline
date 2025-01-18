import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, StarHalf, PenSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Dr. Margaret truly listens and cares about my health concerns. Their expertise and compassion have made a real difference in my life.",
      author: "Sarah Johnson",
      rating: 5,
      type: "Patient"
    },
    {
      content: "From the preoperative consultation to my recovery, I felt completely supported by Dr. Margaret and their team. I highly recommend their services.",
      author: "Michael Chen",
      rating: 5,
      type: "Surgery Patient"
    },
    {
      content: "Dr. Margaret is attentive, knowledgeable, and genuinely cares about their patients. They made me feel heard and supported throughout my treatment.",
      author: "Emily Rodriguez",
      rating: 5,
      type: "Regular Patient"
    },
    {
      content: "The coaching sessions were life-changing. I've never felt healthier or more in control of my wellness.",
      author: "David Thompson",
      rating: 5,
      type: "Wellness Program"
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic testimonials from our valued patients about their experiences at Dinisu Clinic
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-8/12 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-primary/20 mb-4" />
                        <p className="text-gray-700 flex-grow mb-4">{testimonial.content}</p>
                        <div className="mt-auto">
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.type}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-6" />
              <CarouselNext className="right-0 translate-x-6" />
            </div>
          </Carousel>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            className="group"
            onClick={() => window.location.href = '/testimonials'}
          >
            Read More Testimonials
            <Quote className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            className="group"
            onClick={() => window.location.href = '/submit-testimonial'}
          >
            Submit Your Testimonial
            <PenSquare className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;