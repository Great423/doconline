import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, MessageSquare, Send, Phone } from "lucide-react";
import { contactInfo, locations } from "@/constants";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="container mx-auto text-center space-y-4">
          <Badge className="bg-primary">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in Touch with <span className="text-primary">Doc Online</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Our team is here to help you grow
            your social media presence.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl">{info.title}</h3>
                      <p className="text-primary font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtext}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Office</h2>
              <div className="grid gap-6">
                {locations.map((location, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-xl">
                            {location.city}
                          </h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" /> {location.address}
                            </p>
                            <p className="flex items-center gap-2">
                              <Clock className="w-4 h-4" /> {location.hours}
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4" /> {location.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Link Card */}
              <Card className="relative bg-primary rounded-lg text-primary-foreground">
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0 rounded-lg bg-[url('/src/assets/social.jpeg')] bg-cover bg-center bg-no-repeat">
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-primary/80 rounded-lg"></div>
                </div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl">
                        Have more questions?
                      </h3>
                      <p>Check out our frequently asked questions</p>
                    </div>
                    <Link to="/">
                      <Button
                        variant="primary"
                        className="text-primary-foreground"
                        size="lg"
                      >
                        View FAQ
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
