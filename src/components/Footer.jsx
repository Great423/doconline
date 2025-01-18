import React from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CreditCard,
  Shield,
  Clock,
  Heart,
  Building2,
  Bitcoin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-gray-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/public/assets/doc-logo.png"
                className="h-9 sm:h-12"
                alt="Logo"
              />
              <span className="text-xl font-bold whitespace-nowrap dark:text-white">
                Doc Online
              </span>
            </Link>
            <p className="text-muted-foreground">
              We are always online to render Health related solutions...
              Drop a message and we will get back to you.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-2 flex flex-col">
              <Link to="/about-us">
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">About Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Services</Button>
              </Link>
              <Link to="/bookin">
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Book Appointment</Button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                support@Doc Online.com
              </li>
            </ul>
          </div>

          {/* We Accept */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">We Accept</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, text: "Bank Transfer" },
                { icon: Shield, text: "Secure Payments" },
                { icon: Clock, text: "24/7 Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ⦁	Copyright 2025 Dinisu Clinic. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms">
                <Button
                  variant="link"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/terms">
                <Button
                  variant="link"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
