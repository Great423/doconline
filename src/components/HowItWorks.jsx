import React, { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Pause, Play } from 'lucide-react';

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const steps = [
    {
      number: '01',
      title: 'Search Doctor',
      description: 'Find the perfect specialist for your needs using our advanced search system',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    },
    {
      number: '02',
      title: 'Check Doctor Profile',
      description: 'Review detailed profiles, credentials, and patient reviews',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    },
    {
      number: '03',
      title: 'Schedule Appointment',
      description: 'Book your preferred time slot instantly with our real-time scheduling system',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    },
    {
      number: '04',
      title: 'Get Your Solution',
      description: 'Receive personalized care and expert medical solutions',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
  ];

  const videoRef = useRef(null);

  // const handlePlay = () => {
  //   setIsPlaying(true);
  //   if (videoRef.current) {
  //     videoRef.current.play().catch((err) => console.error("Video play error:", err));
  //   } else {
  //     console.error("Video reference is null");
  //   }
  // };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
            Your Journey to <span className='text-primary'>Better</span> Health
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.5s_0.2s_ease-in_forwards]">
            Experience seamless healthcare in four simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-[fadeIn_0.5s_0.4s_ease-in_forwards]">
            <video
              ref={videoRef}
              src="/assets/medical-video.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
            ></video>
            <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center group cursor-pointer hover:bg-gray-900/30 transition-all duration-300">
              {/* <div onClick={handlePlay} className="w-20 h-20 cursor-pointer bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {isPlaying ? <Pause className="w-8 h-8 text-primary ml-1" /> : <Play className="w-8 h-8 text-primary ml-1" />}
              </div> */}
            </div>

            {/* <img
              src="/api/placeholder/800/450"
              alt="Medical consultation"
              className="w-full h-full object-cover"
            /> */}
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={step.number} className="opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]" style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-primary">{step.number}</span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style> */}
    </section>
  );
};

export default HowItWorks;