
import React from 'react';
import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/PainSection';
import OutcomeSection from '@/components/OutcomeSection';
import ProductSection from '@/components/ProductSection';
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import navLogo from '@/assets/navlogo.png';
import footerpic from '@/assets/spiralscalesfooter.png';

const Index = () => {
  return <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
      
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-2 justify-center sm:justify-start">
        <img
          src={navLogo} alt="Spiral Scales Logo"
          alt="Spiral Scales Logo"
          className="h-[32px] sm:h-[40px] w-auto object-contain"
        />
        <span className="text-xl sm:text-2xl font-bold text-gray-900">
          Spiral Scales
        </span>
      </div>
      
      {/* Tagline */}
      <div className="text-sm text-gray-600 text-center sm:text-right">
        Creative CRO Team
      </div>

    </div>
  </div>
</nav>



      {/* Main Content */}
      <HeroSection />
      <PainSection />
      <OutcomeSection />
      <ProductSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="flex justify-center items-center">
            <img src={footerpic} alt="Spiral Scales Logo" alt="Spiral Scales Logo" className="h-[180px] w-auto scale-[1.5] object-contain" />
          </div>
          <p className="text-gray-400 mb-6">
            Data-driven creative optimization for D2C brands.
          </p>
                    {/* === SOCIAL LINKS START HERE === */}
            <div className="flex justify-center items-center gap-6">
            
            {/* Twitter Link */}
            <a href="https://x.com/bfxholdr" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <FaXTwitter size={24} />
            </a>
            
            {/* Substack Link */}
            <a href="https://substack.com/@holdrbfx" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="text-gray-400 hover:text-white transition-colors">
              <BsSubstack size={24} />
            </a>

            {/* Gmail Link */}
            <a href="mailto:holdr.spiralscales@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
              <SiGmail size={24} />
            </a>

          </div>
          {/* === SOCIAL LINKS END HERE === */}
        </div>
      </footer>
    </div>;
};
export default Index;
