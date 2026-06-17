import { config } from '../config';

export function HeroSection() {
  const { hero } = config;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-center px-6 py-24 select-none">
      <div className="container max-w-sm mx-auto space-y-16 relative z-10">
        
        {/* Title Group with roomy vertical lines */}
        <div className="space-y-6">
          <h2 className="text-lg font-light text-gray-400 tracking-widest whitespace-pre-line uppercase leading-relaxed">
            {hero.subtitle}
          </h2>
          <h1 className="text-5xl font-black tracking-tight text-white leading-[1.15]">
            {hero.title}<br/>
            <span className="text-[#E50914]">{hero.titleAccent}</span>
          </h1>
        </div>

        {/* Questions with elegant list spacing */}
        <div className="space-y-5 max-w-xs mx-auto px-1 pt-2">
          {hero.questions.map((q, idx) => (
            <p 
              key={idx}
              className="text-base font-medium text-gray-300 leading-normal break-keep"
            >
              Q. {q}
            </p>
          ))}
        </div>

        {/* Dynamic CTA with huge contrast */}
        <div 
           className="pt-6 leading-relaxed whitespace-pre-line hover:scale-[1.01] transition-transform duration-300"
           dangerouslySetInnerHTML={{ __html: hero.closingRaw }}
        />
      </div>
    </section>
  );
}
