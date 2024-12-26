import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, Clock, CreditCard, ChevronLeft, Check, 
  CalendarIcon, AlertCircle, Upload, Copy, FileCheck 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';

const BookAppointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentProof, setPaymentProof] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    symptoms: '',
    previousHistory: '',
    date: new Date(),
    time: '',
    transactionRef: '',
  });

  const [errors, setErrors] = useState({});

  const paymentAccounts = {
    bank: {
      name: "First City Bank",
      accountName: "Dr. Sarah Johnson",
      accountNumber: "1234567890",
      bankCode: "FCB"
    },
    momo: {
      provider: "Mobile Money",
      number: "+234 800 123 4567",
      name: "Dr. Sarah Johnson"
    }
  };

  const services = {
    'Neurology Consultation': { 
      price: 300, 
      duration: '60 mins',
      description: 'Comprehensive evaluation and treatment of nervous system disorders',
      availability: 'Appointments available within 1-2 weeks'
    },
    'Ophthalmology Consultation': { 
      price: 150, 
      duration: '40 mins',
      description: 'Eye examinations and treatment of vision-related issues',
      availability: 'Same day appointments often available'
    },
    'Urology Consultation': { 
      price: 200, 
      duration: '50 mins',
      description: 'Diagnosis and treatment of urinary tract and reproductive system issues',
      availability: 'Available within 3-5 days'
    },
    'Orthopedic Consultation': { 
      price: 250, 
      duration: '45 mins',
      description: 'Consultation for bone, joint, and muscle-related conditions',
      availability: 'Typically available within a week'
    },
    'Dermatology Consultation': { 
      price: 180, 
      duration: '30 mins',
      description: 'Skin checkups and treatment for dermatological issues',
      availability: 'Appointments available within 2-3 days'
    }
  };  

  const timeSlots = [
    { time: '09:00', available: true, slots: 3 },
    { time: '09:30', available: false, slots: 0 },
    { time: '10:00', available: true, slots: 2 },
    { time: '10:30', available: true, slots: 4 },
    { time: '11:00', available: false, slots: 0 },
    { time: '11:30', available: true, slots: 1 },
    { time: '14:00', available: true, slots: 5 },
    { time: '14:30', available: true, slots: 3 },
    { time: '15:00', available: true, slots: 2 },
    { time: '15:30', available: false, slots: 0 },
    { time: '16:00', available: true, slots: 4 },
    { time: '16:30', available: true, slots: 3 }
  ];

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.name?.trim()) newErrors.name = 'Name is required';
      if (!formData.email?.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone?.trim()) newErrors.phone = 'Phone is required';
      else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone format';
      if (!formData.service) newErrors.service = 'Please select a service';
      if (!formData.symptoms?.trim()) newErrors.symptoms = 'Please describe your symptoms';
    }

    if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.time) newErrors.time = 'Please select a time slot';
    }

    if (currentStep === 3) {
      if (!formData.transactionRef?.trim()) newErrors.transactionRef = 'Transaction reference is required';
      if (!paymentProof) newErrors.paymentProof = 'Payment proof is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentProof = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file",
          variant: "destructive"
        });
        return;
      }

      setPaymentProof(file);
      setErrors(prev => ({ ...prev, paymentProof: '' }));
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Account details copied successfully",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Validation Error",
        description: "Please check all required fields",
        variant: "destructive"
      });
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        toast({
          title: "Booking Successful!",
          description: "Your appointment has been confirmed. Check your email for details.",
          duration: 5000
        });
        
        navigate('/booking-confirmation', { 
          state: { 
            bookingRef: `REF-${Date.now()}`,
            appointmentDetails: formData 
          }
        });
      } catch (error) {
        toast({
          title: "Booking Failed",
          description: "There was an error processing your booking. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Progress value={(step / 3) * 100} className="h-2" />
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-600' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                {step > 1 ? <Check className="h-5 w-5" /> : '1'}
              </div>
              Personal Info
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-600' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                {step > 2 ? <Check className="h-5 w-5" /> : '2'}
              </div>
              Schedule
            </div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-blue-600' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                3
                </div>
              Confirmation
            </div>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className='text-2xl font-semibold'>Personal Information</h3>
              </CardTitle>
              <CardDescription>
                Please provide your details for the appointment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Select Service</Label>
                  <Select onValueChange={(value) => handleInputChange({ target: { name: 'service', value } })} value={formData.service}>
                    <SelectTrigger className={errors.service ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(services).map(([name, details]) => (
                        <SelectItem key={name} value={name}>
                          <div className="flex flex-col">
                            <span className="font-medium">{name}</span>
                            <span className="text-sm text-gray-500">
                              ${details.price} - {details.duration}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms/Reason for Visit</Label>
                <Textarea
                  id="symptoms"
                  name="symptoms"
                  placeholder="Please describe your symptoms or reason for visit"
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  className={`min-h-[100px] ${errors.symptoms ? 'border-red-500' : ''}`}
                />
                {errors.symptoms && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.symptoms}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousHistory">Previous Medical History (Optional)</Label>
                <Textarea
                  id="previousHistory"
                  name="previousHistory"
                  placeholder="Any relevant medical history you'd like to share"
                  value={formData.previousHistory}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full">Continue to Schedule</Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className='text-2xl'>Schedule Appointment</h3>
              </CardTitle>
              <CardDescription>
                Choose your preferred date and time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                  <TabsTrigger value="slots">Available Slots</TabsTrigger>
                </TabsList>
                <TabsContent value="calendar" className="space-y-4">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => handleInputChange({ target: { name: 'date', value: date } })}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.date}
                    </p>
                  )}
                </TabsContent>
                <TabsContent value="slots" className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(({ time, available, slots }) => (
                    <Button
                      key={time}
                      variant={formData.time === time ? "default" : "outline"}
                      onClick={() => handleInputChange({ target: { name: 'time', value: time } })}
                      disabled={!available}
                      className={clsx('relative', {
                        'opacity-50 cursor-not-allowed': !available,
                        'bg-blue-500 text-white': formData.time === time,
                      })}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time}
                      {available && (
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
                          {slots}
                        </span>
                      )}
                    </Button>
                  ))}

                  </div>
                  {errors.time && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.time}
                    </p>
                  )}
                </TabsContent>
              </Tabs>

              {formData.service && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Selected Service Details</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p>Duration: {services[formData.service].duration}</p>
                    <p>Price: ${services[formData.service].price}</p>
                    <p>{services[formData.service].availability}</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={handleNext}>Continue to Confirmation</Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className='text-2xl'>Payment Confirmation</h3>
              </CardTitle>
              <CardDescription>
                Please complete the payment and provide proof to confirm your appointment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                {/* Bank Transfer Details */}
                <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg text-blue-900">Bank Transfer Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Bank Name</p>
                        <p className="font-medium">{paymentAccounts.bank.name}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(paymentAccounts.bank.name)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Account Number</p>
                        <p className="font-medium">{paymentAccounts.bank.accountNumber}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(paymentAccounts.bank.accountNumber)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Account Name</p>
                        <p className="font-medium">{paymentAccounts.bank.accountName}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(paymentAccounts.bank.accountName)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mobile Money Option */}
                <div className="bg-purple-50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg text-purple-900">Mobile Money</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Number</p>
                        <p className="font-medium">{paymentAccounts.momo.number}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(paymentAccounts.momo.number)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-medium">{paymentAccounts.momo.name}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(paymentAccounts.momo.name)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Amount to Pay */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-green-900">Amount to Pay</h3>
                  <div className="mt-2">
                    <p className="text-3xl font-bold text-green-900">
                      ${formData.service ? services[formData.service].price : '0'}
                    </p>
                    <p className="text-sm text-green-700 mt-1">
                      for {formData.service} ({services[formData.service]?.duration})
                    </p>
                  </div>
                </div>

                {/* Payment Verification */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Transaction Reference</Label>
                    <Input
                      name="transactionRef"
                      value={formData.transactionRef}
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Enter transaction reference from your payment"
                      className={errors.transactionRef ? 'border-red-500' : ''}
                    />
                    {errors.transactionRef && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.transactionRef}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Payment Proof</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePaymentProof}
                        className="hidden"
                        id="payment-proof"
                      />
                      <label htmlFor="payment-proof" className="cursor-pointer">
                        {paymentProof ? (
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <FileCheck className="h-6 w-6" />
                            <span>{paymentProof.name}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-gray-500">
                            <Upload className="h-8 w-8" />
                            <span>Click to upload payment proof</span>
                            <span className="text-sm">PNG, JPG up to 5MB</span>
                          </div>
                        )}
                      </label>
                    </div>
                    {errors.paymentProof && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.paymentProof}
                      </p>
                    )}
                  </div>
                </div>

                {/* Appointment Summary */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <h4 className="font-medium">Appointment Summary</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Date & Time</p>
                        <p className="text-sm text-gray-600">
                          {formData.date?.toLocaleDateString()} at {formData.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Service</p>
                        <p className="text-sm text-gray-600">{formData.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting || !paymentProof || !formData.transactionRef}
                className="bg-blue-500 hover:bg-blue-600"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Confirm Booking
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;