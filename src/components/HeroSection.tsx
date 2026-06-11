import { config } from '../config';

export function HeroSection() {
  const { hero } = config;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-center px-4 md:px-6 py-20">
      <div className="container max-w-4xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Title Group */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-lg md:text-2xl font-light text-gray-400 tracking-widest whitespace-pre-line uppercase">
            {hero.subtitle}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white">
            {hero.title}<br/>
            <span className="text-[#E50914]">{hero.titleAccent}</span>
          </h1>
        </div>

        {/* Questions - Simplified */}
        <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto px-4 md:px-0">
          {hero.questions.map((q, idx) => (
            <p 
              key={idx}
              className="text-base md:text-xl font-medium text-gray-300 break-keep"
            >
              {q}
            </p>
          ))}
        </div>

        {/* Closing / Call to Action */}
        <div 
           className="pt-10 leading-relaxed whitespace-pre-line"
           dangerouslySetInnerHTML={{ __html: hero.closingRaw }}
        />
      </div>
    </section>
  );
}
