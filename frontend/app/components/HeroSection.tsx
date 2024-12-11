import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Gradient glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-gradient-to-t from-[#ff6b00] via-[#ff6b00]/50 to-transparent rounded-full blur-3xl opacity-40" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Headline Here
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your compelling subheadline or description goes here. Make it engaging and informative.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
} 