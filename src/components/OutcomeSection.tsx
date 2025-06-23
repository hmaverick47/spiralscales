
import React from 'react';
import { TrendingUp } from 'lucide-react';

const OutcomeSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Imagine Operating With Calm, Analytical Confidence.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Predictable Performance</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You have a clear view of what works, why it works, and a pipeline of optimized ads 
              ready to deploy before performance ever dips.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Sustainable Scaling</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You can increase your ad spend with the confidence of knowing your creative is built 
              on a reliable system, not on a single "hero ad" that could die at any moment.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Profitable Clarity</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You can clearly connect your creative efforts to your bottom line, managing your ad 
              spend as a strategic investment, not an anxious expense.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            True creative performance isn't about finding a magic bullet. <br />
            <span className="text-blue-600">It's about installing a disciplined engine.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
