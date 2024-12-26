import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Award, ScrollText, Search, Calendar, Stethoscope } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <img src="/src/assets/blob.webp" className="filter blur-[200px] absolute right-52 w-[500px] -z-10" alt="blob" />
      <div className="relative flex flex-col items-center justify-end px-4 lg:px-20 lg:h-[90vh] overflow-hidden">
        <div className="container mx-auto py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-4 text-center lg:text-start flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary">
              <span className="text-sm font-medium">Now accepting new patients</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-semibold lg:font-bold text-gray-900 leading-tight">
              Your Health, <br />
              <span className="text-primary">Our Priority</span>
            </h1>
            
            <p className="text-gray-600 lg:text-lg max-w-xl">
              Experience healthcare reimagined with Dinisu Clinic. Modern facilities, 
              compassionate care, and innovative solutions for your well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8">
                Schedule Appointment
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Services
              </Button>
            </div>
          </motion.div>


          {/* Right Image */}
          <div className="flex-1">
            <motion.img
              src="/src/assets/doctor.png"
              alt="Doctor folding hands"
              className="absolute bottom-4 w-full max-w-md lg:max-w-sm hidden lg:block"
              initial={{ opacity: 1, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // custom ease curve for smooth motion
                delay: 0.2
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </div>
          <motion.div 
            className="absolute lg:right-36 top-14 -z-10 hidden xl:block max-w-xs rounded-lg overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center p-6">
              <img
                src="/src/assets/dinisuceo1.jpg"
                alt="Avatar"
                className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Dr. Margaret Odili</h2>
                <p className="text-gray-500">Medical Doctor</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid divide-x divide-gray-100/10 overflow-hidden rounded-3xl sm:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 w-full">
          {[
            {
              icon: <Search className="w-8 h-8 text-white" />,
              title: "Search Doctor",
              description: "Find the perfect specialist for your healthcare needs",
              background: "black",
              blob: "bg-primary/20"
            },
            {
              icon: <Calendar className="w-8 h-8 text-white" />,
              title: "Appointment",
              description: "Schedule your visit at your convenience",
              background: "black",
              blob: "bg-blue-500/20"
            },
            {
              icon: <Stethoscope className="w-8 h-8 text-white" />,
              title: "Get Solution",
              description: "Receive personalized care and treatment plans",
              background: "black",
              blob: "bg-cyan-500/20"
            },
          ].map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Blurred blob background */}
              <div className={`absolute w-[200px] h-[200px] rounded-full filter blur-[80px] ${step.blob} -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
              
              <div className={`relative flex flex-col items-center space-y-4 p-8 bg-black/80 backdrop-blur-md h-full group-hover:shadow-xl`}>
                {/* Icon container with glass effect */}
                <div className="p-4 rounded-2xl bg-white/10 transition-transform group-hover:scale-[1.03]">
                  {step.icon}
                </div>
                
                <div className="space-y-2 text-center transition-transform group-hover:scale-[1.03]">
                  <h5 className="text-xl font-semibold text-white">
                    {step.title}
                  </h5>
                  <p className="text-gray-100/80 text-sm transition-transform group-hover:scale-[1.03]">
                    {step.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;