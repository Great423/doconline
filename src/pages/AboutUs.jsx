import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Phone, Clock, Award, Users, Heart, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';

const AboutUs = () => {
  const features = [
    {
      title: "Expertise",
      description: "Highly qualified medical professionals dedicated to your well-being.",
      icon: Award
    },
    {
      title: "Convenience",
      description: "Virtual consultations and telemedicine services to fit into your schedule.",
      icon: Clock
    },
    {
      title: "Comprehensive Services",
      description: "Routine check-ups, specialized treatments, and preventive care.",
      icon: Heart
    },
    {
      title: "Patient Education",
      description: "Empowering you with knowledge about your condition and treatments.",
      icon: Users
    }
  ];

  const faqs = [
    {
      question: "What is Dinisu Clinic?",
      answer: "Dinisu Clinic is your trusted online healthcare platform, providing comprehensive medical services through a convenient digital interface."
    },
    {
      question: "How does Dinisu Clinic work?",
      answer: "Simply register, choose your preferred specialist, schedule an appointment, and connect with your doctor either virtually or in-person."
    },
    {
      question: "Is Dinisu Clinic only for specific medical conditions?",
      answer: "No, we offer a wide range of medical services from general consultations to specialized treatments across multiple disciplines."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can easily schedule appointments through our online platform or mobile app, or call our 24/7 helpline."
    },
    {
      question: "Do I need special software for virtual consultations?",
      answer: "No, our virtual consultations work directly through your web browser or our mobile app - no additional software needed."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden px-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Our Company
              </h1>
              <p className="text-lg text-gray-600">
                Welcome to <span className='text-primary'>Dinisu Clinic</span>, your trusted partner in delivering top-notch medical care through the convenience of an online platform. At Dinisu Clinic, we are committed to ensuring the best medical treatment for your health, all from the comfort of your home.
              </p>
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Need Emergency? +234 902 157 3173
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  src="/assets/medical-video.mp4"
                  className='w-full h-full object-cover'
                  muted
                  autoPlay
                  loop>
                </video>
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-primary/80 text-white">
        <img src="/src/assets/cta.jpg" className='absolute top-0 -z-20 object-cover w-full h-full' alt="cta" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              { number: "10k+", label: "Happy Patients" },
              { number: "30+", label: "Years Experience" },
              { number: "100+", label: "Expert Doctors" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/src/assets/dinisuceo3.jpg"
                alt="Doctor"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">4.9</span>
                  <span className="text-gray-600">(2000+ Reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Meet Our Doctor</h2>
              <p className="text-gray-600">
                Dr. Odili Margaret is a highly acclaimed medical professional with over 15 years of experience in healthcare. Her dedication to patient care and innovative treatments has earned her numerous accolades and the trust of countless patients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  MBBS, Harvard Medical School
                </li>
                <li className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Specialist in Cardiology and Neurology
                </li>
                <li className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Recipient of the Global Health Award 2023
                </li>
                <li className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Published 20+ research papers on medical innovations
                </li>
              </ul>
              <Button size="lg">View Professional Profile</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Clinic Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Patient Consultation", type: "video" },
              { title: "Medical Procedures", src: '/src/assets/doctor-patient.jpg', type: "image" },
              { title: "Lab Analysis", src: '/src/assets/doctors-working2.webp', type: "image" },
              { title: "Emergency Care", src: '',  type: "video" },
              { title: "Physical Therapy", src: '/src/assets/doctors-working2.webp', type: "image" },
              { title: "Team Meetings", src: '',  type: "video" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group">
                {item.type === "image" ?
                  <img
                    src={`${item.src}`}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  /> : 
                  <video
                    src="/assets/medical-video.mp4"
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                    muted
                    controls
                  />}
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <CallToAction />
    </div>
  );
};

export default AboutUs;