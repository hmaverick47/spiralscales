
import React from 'react';
import { Zap } from 'lucide-react';

const PainSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Does This Sound Familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-red-500 mr-3" />
              <div className="w-full h-px bg-red-200"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Your best "winning ad" suddenly dies, and panic sets in. You feel trapped in a constant, 
              expensive grind of creating new ads just to stay afloat, and you're exhausted from 
              "throwing stuff at the wall and hoping it sticks."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-red-500 mr-3" />
              <div className="w-full h-px bg-red-200"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Your performance is volatile. One day you're profitable, the next day "everything drops." 
              You feel like you're operating on guesswork, and every change to your ad account feels 
              like a gamble.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-red-500 mr-3" />
              <div className="w-full h-px bg-red-200"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You're spending a significant budget, but you're not sure if you're actually profitable. 
              Your ROAS looks good on paper, but you have a nagging feeling that you're just 
              "burning spend on every individual ad" without building a real, sustainable asset.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Problem Isn't Your Creative. <br />
            <span className="text-blue-600">It's The Lack of a System.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
