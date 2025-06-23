
import React, { useEffect } from 'react';
import { Shield, TrendingUp, Target } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/holdr-spiralscales/30min'});
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Guessing What Creative Works. <br />
            <span className="text-blue-600">We Install The System That Proves It.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            For D2C brands tired of volatile ad performance and creative burnout. 
            We provide a data-driven system for profitable scaling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">End Creative Burnout</h3>
            <p className="text-gray-600">
              We install a system to keep your best ads converting for months, not weeks.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">De-Risk Ad Spend</h3>
            <p className="text-gray-600">
              Our disciplined testing process eliminates guesswork and reduces wasted ad spend.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Achieve Predictable Growth</h3>
            <p className="text-gray-600">
              We turn your creative from a volatile variable into a reliable engine for profit.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={handleCalendlyClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Apply For Your Free Diagnosis
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
