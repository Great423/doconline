import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Droplet, 
  Bone, 
  Eye,
  ArrowRight
} from "lucide-react";
import { FaTooth } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const specialties = [
  { 
    name: "Cardiology", 
    icon: Heart, 
    description: "Expert heart care and comprehensive cardiovascular treatments for your heart health.", 
    link: "/book-appointment/cardiology",
    bgColor: "bg-primary",
    textColor: "text-white",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Neurology", 
    icon: Brain, 
    description: "Specialized care for brain and nervous system conditions with advanced treatments.", 
    link: "/book-appointment/neurology",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  { 
    name: "Urology", 
    icon: Droplet, 
    description: "Professional treatment for urinary tract issues and urological health.", 
    link: "/book-appointment/urology",
    bgColor: "bg-primary",
    textColor: "text-white",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Dentistry", 
    icon: FaTooth, 
    description: "Complete dental care solutions for maintaining your perfect smile.", 
    link: "/book-appointment/dentist",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  { 
    name: "Orthopedics", 
    icon: Bone, 
    description: "Specialized care for bone and joint health to keep you moving.", 
    link: "/book-appointment/orthopedic",
    bgColor: "bg-primary",
    textColor: "text-white",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Ophthalmology", 
    icon: Eye, 
    description: "Comprehensive eye care services from experienced vision specialists.", 
    link: "/book-appointment/ophthalmology",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    glowColor: "group-hover:shadow-secondary/25"
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-black bg-20" />
      </div>
      
      {/* Carousel */}
      <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto py-24"
        >
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              Our Medical Specialties
            </h2>
            <p className="text-gray-600 text-lg">
              Exceptional Healthcare Services by Expert Specialists
            </p>
          </div>
          <CarouselContent className="-ml-2 md:-ml-4 pb-16 mt-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <Card className={cn(
                    "group h-full bg-white border-none",
                    "transition-all duration-500 ease-out",
                    "hover:shadow-2xl hover:scale-[1.02]",
                    specialty.glowColor
                  )}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col h-full space-y-6">
                        {/* Icon Container */}
                        <div className={cn(
                          "w-16 h-16 rounded-xl flex items-center justify-center",
                          "bg-opacity-10 relative overflow-hidden",
                          specialty.bgColor,
                          "transition-transform duration-500 ease-out",
                          "group-hover:rotate-6"
                        )}>
                          <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
                          <Icon className={`${specialty.textColor} w-8 h-8 relative z-10`} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {specialty.name}
                          </h3>
                          <p className="text-gray-600">
                            {specialty.description}
                          </p>
                        </div>
                        
                        {/* Button */}
                        <Button
                          asChild
                          className={cn(
                            "w-full group/button",
                            "transition-all duration-300",
                            "bg-gray-50 hover:bg-gray-100",
                            "text-primary hover:text-primary"
                          )}
                        >
                          <a href={specialty.link} className="flex items-center justify-between">
                            <span className="font-medium">Book Appointment</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className='w-full flex justify-center group'>
            <Link to="/services">
              <Button size="lg" variant="outline" className="h-12 px-8 group-hover:text-primary">
                View Services
              </Button>
            </Link>
          </div>
          <CarouselPrevious className={cn(
            "flex mt-72 md:mt-0 left-0 xl:-left-12 p-8",
            "bg-white/90 backdrop-blur-sm",
            "hover:bg-primary hover:text-white",
            "border-primary/10",
            "shadow-lg shadow-primary/[0.15]",
            "transition-all duration-300"
          )} />
          <CarouselNext className={cn(
            "flex mt-72 md:mt-0 right-0 xl:-right-12 p-8",
            "bg-white/90 backdrop-blur-sm",
            "hover:bg-primary hover:text-white",
            "border-primary/10",
            "shadow-lg shadow-primary/[0.15]",
            "transition-all duration-300"
          )} />
        </Carousel>
    </section>
  );
}