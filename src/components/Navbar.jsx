import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="sticky top-0 left-0 w-full shadow-md z-[100] bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/src/assets/doc-logo.png"
              className="h-9 sm:h-12"
              alt="Logo"
            />
            <span className="text-xl font-bold whitespace-nowrap dark:text-white">
              Doc Online
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleLinkClick}
                className={`${
                  location.pathname === item.href
                    ? "text-primary font-bold"
                    : "text-foreground"
                }`}
              >
                <Button variant="ghost">{item.label}</Button>
              </Link>
            ))}
          </div>

          {/* Desktop appointment Button */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/booking">
              <Button className="rounded-full text-foreground bg-white hover:bg-primary/10 ring-1 ring-primary">
                Book Appointment
                <div className="bg-primary/80 h-6 w-6 rounded-full flex items-center justify-center ml-2">
                  <ArrowRight className="text-white h-4 w-4 -rotate-45" />
                </div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-6 space-y-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`${
                    location.pathname === item.href
                      ? "text-primary font-bold"
                      : "text-foreground"
                  }`}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
            <Link to="/signup">
              <Button className="w-full rounded-full text-primary bg-white hover:bg-primary/10 ring-1 ring-primary">
                Book Appointment
                <div className="bg-primary/80 h-6 w-6 rounded-full flex items-center justify-center ml-2">
                  <ArrowRight className="text-white h-4 w-4 -rotate-45" />
                </div>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
