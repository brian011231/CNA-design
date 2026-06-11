import { config } from '../config';

export function TestimonialsSection() {
  const { testimonials } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="container max-w-7xl mx-auto space-y-12 md:space-y-20">
        
        <div className="text-center space-y-4 md:space-y-6">
          <span className="text-[#E50914] font-bold tracking-widest uppercase text-xs md:text-sm">Real Stories</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">수강생 후기</h2>
          <p className="text-sm md:text-base text-gray-400 break-keep">CNA를 통해 완전히 변화된 사람들의 이야기</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-[#111] border border-gray-800 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col hover:border-[#E50914]/50 transition-colors"
            >
              {/* Image & Highlights */}
              <div className="relative h-48 bg-black">
                 <img 
                   src={test.image} 
                   alt={`Student ${test.id}`} 
                   className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                 
                 <div className="absolute bottom-4 md:bottom-6 left-5 md:left-6 right-5 md:right-6">
                    {test.highlight1 && (
                      <span className="block text-base md:text-lg font-bold text-white leading-tight break-keep">
                        {test.highlight1}
                      </span>
                    )}
                    {test.highlight2 && (
                      <span className="block text-xl md:text-2xl font-black text-[#E50914] leading-tight mt-1 break-keep">
                        {test.highlight2}
                      </span>
                    )}
                 </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700 mb-4 md:mb-6" fill="currentColor" viewBox="0 0 32 32">
                   <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.1c.5-2.2 2.5-4 4.9-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6.9c.5-2.2 2.5-4 4.9-4V8z"/>
                </svg>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed whitespace-pre-line font-light break-keep">
                  {test.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
