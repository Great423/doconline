import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Droplet, 
  Bone, 
  Eye,
  ArrowRight,
  Search,
  Star
} from "lucide-react";
import { FaTooth } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'specialized', name: 'Specialized Care' },
    { id: 'preventive', name: 'Preventive Care' }
  ];

  const specialties = [
    { 
      name: "Cardiology", 
      icon: Heart, 
      description: "Expert heart care and comprehensive cardiovascular treatments for your heart health.", 
      category: 'specialized',
      rating: 4.9,
      reviews: 128,
      waitTime: "2-3 days",
      bgColor: "bg-primary",
      glowColor: "group-hover:shadow-primary/25"
    },
    { 
      name: "Neurology", 
      icon: Brain, 
      description: "Specialized care for brain and nervous system conditions with advanced treatments.", 
      category: 'specialized',
      rating: 4.8,
      reviews: 96,
      waitTime: "1-2 days",
      bgColor: "bg-secondary",
      glowColor: "group-hover:shadow-secondary/25"
    },
    { 
      name: "Urology", 
      icon: Droplet, 
      description: "Professional treatment for urinary tract issues and urological health.", 
      category: 'specialized',
      rating: 4.7,
      reviews: 84,
      waitTime: "2-4 days",
      bgColor: "bg-primary",
      glowColor: "group-hover:shadow-primary/25"
    },
    { 
      name: "Dentistry", 
      icon: FaTooth, 
      description: "Complete dental care solutions for maintaining your perfect smile.", 
      category: 'preventive',
      rating: 4.9,
      reviews: 156,
      waitTime: "1 day",
      bgColor: "bg-secondary",
      glowColor: "group-hover:shadow-secondary/25"
    },
    { 
      name: "Orthopedics", 
      icon: Bone, 
      description: "Specialized care for bone and joint health to keep you moving.", 
      category: 'specialized',
      rating: 4.8,
      reviews: 112,
      waitTime: "2-3 days",
      bgColor: "bg-primary",
      glowColor: "group-hover:shadow-primary/25"
    },
    { 
      name: "Ophthalmology", 
      icon: Eye, 
      description: "Comprehensive eye care services from experienced vision specialists.", 
      category: 'preventive',
      rating: 4.7,
      reviews: 92,
      waitTime: "1-2 days",
      bgColor: "bg-secondary",
      glowColor: "group-hover:shadow-secondary/25"
    }
  ];

  const filteredSpecialties = specialties
    .filter(specialty => {
      // First filter by category
      const matchesCategory = selectedCategory === 'all' || specialty.category === selectedCategory;
      
      // Then filter by search query
      const searchTerm = searchQuery.toLowerCase().trim();
      const matchesSearch = searchTerm === '' || 
        specialty.name.toLowerCase().includes(searchTerm) ||
        specialty.description.toLowerCase().includes(searchTerm);
      
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Medical Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience world-class healthcare with our comprehensive range of medical services
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={cn(
                  "h-12 px-6 rounded-full",
                  selectedCategory === category.id && "bg-primary text-white"
                )}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No services found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpecialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <Card key={index} className={cn(
                    "group h-full bg-white",
                    "transition-all duration-500 ease-out",
                    "hover:shadow-2xl hover:scale-[1.02]",
                    specialty.glowColor
                  )}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col h-full space-y-6">
                        <div className="flex justify-between items-start">
                          <div className={cn(
                            "w-16 h-16 rounded-xl flex items-center justify-center",
                            "bg-opacity-10",
                            specialty.bgColor,
                            "transition-transform duration-500 ease-out",
                            "group-hover:rotate-6"
                          )}>
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-gray-700 font-medium">{specialty.rating}</span>
                            <span className="text-gray-400">({specialty.reviews})</span>
                          </div>
                        </div>

                        <div className="flex-grow space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {specialty.name}
                          </h3>
                          <p className="text-gray-600">
                            {specialty.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Average wait time</span>
                            <span className="text-gray-900 font-medium">{specialty.waitTime}</span>
                          </div>
                          
                          <Button
                            className="w-full group/button bg-primary hover:bg-primary/90"
                          >
                            <span className="font-medium">Book Appointment</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;