
import React from 'react';

const ProductSection = () => {
  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/holdr-spiralscales/30min'});
    }
  };

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Spiral Scales System
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A complete, human-led partnership that installs a systematic process for Creative CRO 
            into your business. We act as your outsourced Creative Performance Partner, providing 
            the strategy and systems you've been missing.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Systems Are Engineered for Two Critical Growth Stages
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-blue-400 mb-4">
                The "Go-to-Market" Package
              </h4>
              <p className="text-lg text-gray-300 mb-4 font-semibold">
                For New Product Launches
              </p>
              <p className="text-gray-300 leading-relaxed">
                For founders launching a new product, our system is delivered as a fixed project. 
                We de-risk your launch by installing a framework to find your first winning creative 
                and establish product-market-message fit efficiently, without wasting your 
                foundational budget.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-blue-400 mb-4">
                The "Creative Optimization" Retainer
              </h4>
              <p className="text-lg text-gray-300 mb-4 font-semibold">
                For Existing Brands
              </p>
              <p className="text-gray-300 leading-relaxed">
                For established brands already advertising, our system is delivered as an ongoing 
                monthly retainer. We act as your outsourced creative performance team, ending the 
                cycle of burnout and installing a continuous optimization engine to scale your 
                brand profitably.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/b1442e65-602a-405b-b340-aa684453ddea.png" 
                  alt="Holdr BFX, Founder of Spiral Scales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">Message from the Founder</h4>
              <p className="text-gray-300 leading-relaxed italic">
                "I started Spiral Scales because I saw too many great brands trapped by creative chaos. 
                My entire focus is on providing the data-driven clarity that allows founders to scale 
                with confidence. We don't sell ads; we deliver predictable performance systems. 
                That's the difference."
              </p>
              <p className="text-gray-400 mt-2">— Holdr BFX, Founder</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-600 p-12 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Guessing. Start Systematizing.
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your ad creative is your single most important growth lever. Apply for your free, 
            no-obligation Creative Performance Diagnosis today, and we will show you the three 
            biggest opportunities to improve your profitability.
          </p>
          <button 
            onClick={handleCalendlyClick}
            className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-5 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Apply For Your Free Diagnosis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
