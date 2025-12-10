"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Wrench, 
  Clock, 
  Mail, 
  Crown,
  Sparkles,
  Store
} from 'lucide-react';

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 30,
    seconds: 0
  });
  const [isAnimating] = useState(true);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-10 animate-pulse">
          <Crown 
            size={60} 
            className="text-yellow-600 animate-bounce" 
            style={{ animationDuration: '3s' }} 
          />
        </div>
        <div className="absolute top-20 right-10 opacity-10 animate-pulse">
          <Sparkles 
            size={50} 
            className="text-orange-600 animate-bounce" 
            style={{ animationDuration: '4s', animationDelay: '1s' }} 
          />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 animate-pulse">
          <Store 
            size={55} 
            className="text-red-600 animate-bounce" 
            style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} 
          />
        </div>
        <div className="absolute bottom-32 right-20 opacity-10 animate-pulse">
          <Wrench 
            size={45} 
            className="text-yellow-600 animate-bounce" 
            style={{ animationDuration: '3.5s', animationDelay: '2s' }} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div 
          className={`max-w-2xl w-full transition-all duration-1000 ${
            isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            {/* Logo with Next.js Image optimization */}
            <div className="inline-block mb-4">
              {!logoError ? (
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                  <Image 
                    src="/logo.png" 
                    alt="Anugami Logo" 
                    fill
                    className="object-contain"
                    onError={() => setLogoError(true)}
                    priority
                  />
                </div>
              ) : (
                /* Fallback icon if logo image is not available */
                <div className="bg-linear-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl shadow-2xl flex justify-center items-center w-32 h-32 md:w-40 md:h-40 mx-auto">
                  <Store className="w-20 h-20 text-white" />
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-2">
              Premium Marketplace
            </h1>
            
          </div>

          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-linear-to-r from-yellow-500 to-orange-500 p-10 text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm p-5 rounded-full mb-4">
                <Wrench className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-3">
                We&apos;re Under Maintenance
              </h2>
              <p className="text-yellow-100 text-xl">
                Our team is working hard to improve your experience
              </p>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8">
              {/* Countdown Timer */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-orange-500 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Estimated Time to Completion
                  </h3>
                </div>
                <div className="flex justify-center gap-4">
                  {[
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 min-w-[100px] shadow-lg border-2 border-orange-200">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-orange-600">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm text-gray-600 mt-2 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-gray-200"></div>

              {/* Contact Section */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Need Assistance?
                </h3>
                
                <div className="space-y-4">
                  {/* Email Contact */}
                  <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                    <div className="flex items-center justify-center mb-3">
                      <div className="bg-linear-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h4>
                    <a 
                      href="mailto:support@anugami.com" 
                      className="text-xl text-orange-600 hover:text-orange-700 font-bold inline-block transition-colors"
                    >
                      support@anugami.com
                    </a>
                    <p className="text-sm text-gray-600 mt-2">We&apos;ll respond within 24 hours</p>
                  </div>

                  {/* Phone Contact (Optional - uncomment if needed) */}
                  {/* 
                  <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                    <div className="flex items-center justify-center mb-3">
                      <div className="bg-linear-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Phone Support</h4>
                    <a 
                      href="tel:+911234567890" 
                      className="text-xl text-orange-600 hover:text-orange-700 font-bold inline-block transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-lg mb-2">© 2025 Anugami. All rights reserved.</p>
            <p className="text-base">We apologize for any inconvenience caused.</p>
          </div>
        </div>
      </div>
    </div>
  );
}