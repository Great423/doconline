import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Award, ScrollText, Search, Calendar, Stethoscope, ClipboardCheck, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <img src="/public/assets/blob.webp" className="filter blur-[200px] absolute right-52 w-[500px] -z-10" alt="blob" />
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
              Your trusted partner in health and well-being.
              At Dinisu Clinic, we are dedicated to providing comprehensive and compassionate care, tailored to meet your individual needs.
              Explore our services and discover how we can support your well-being at every stage of your health journey.
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
              src="/doconline/public/assets/doctor.png"
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
                src="/public/assets/dinisuceo1.jpg"
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
              icon: <Calendar className="w-8 h-8 text-white" />,
              title: "Book Appointment",
              description: "Easily schedule your visit online.",
              background: "bg-primary",
              blob: "bg-primary/20"
            },
            {
              icon: <ClipboardCheck className="w-8 h-8 text-white" />,
              title: "Consultation Details",
              description: "Learn about your appointment details.",
              background: "bg-green-500",
              blob: "bg-green-500/20"
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-white" />,
              title: "Ask a Question",
              description: "Get answers to your health concerns.",
              background: "bg-blue-500",
              blob: "bg-blue-500/20"
            },
          ].map((step, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className={`absolute w-[200px] h-[200px] rounded-full filter blur-[80px] ${step.blob} -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
              <div className="relative flex flex-col items-center space-y-4 p-8 bg-black/80 backdrop-blur-md h-full group-hover:shadow-xl">
                <div className="p-4 rounded-2xl bg-white/10 transition-transform group-hover:scale-[1.03]">
                  {step.icon}
                </div>
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white">
                    {step.title}
                  </h5>
                  <p className="text-gray-100/80 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;