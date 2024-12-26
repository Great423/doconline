import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$19",
      description: "Ideal for individuals who need occasional consultations.",
      features: [
        "1 Consultation per month",
        "Email support",
        "Access to basic healthcare resources"
      ],
      isPopular: false
    },
    {
      name: "Standard Plan",
      price: "$49",
      description: "Perfect for those who need regular consultations and additional features.",
      features: [
        "3 Consultations per month",
        "Priority email support",
        "Access to advanced resources",
        "Health monitoring tools"
      ],
      isPopular: true
    },
    {
      name: "Premium Plan",
      price: "$99",
      description: "For individuals who require full access to healthcare consultations and benefits.",
      features: [
        "Unlimited Consultations per month",
        "24/7 Priority support",
        "Full access to all healthcare resources",
        "Personalized health plans",
        "Access to exclusive webinars and events"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, <span className='text-primary'>Transparent</span> Pricing</h2>
          <p className="text-lg text-gray-600">Choose the perfect plan that works best for your healthcare needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              plan.isPopular ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200 shadow-lg'
            } rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
              {plan.isPopular && (
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Popular
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>

                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
                  variant={plan.isPopular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;