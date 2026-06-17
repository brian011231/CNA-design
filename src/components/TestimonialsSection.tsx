import { config } from '../config';

export function TestimonialsSection() {
  const { testimonials } = config;

  return (
    <section className="py-24 px-6 bg-[#FCFBF9] border-b border-gray-200/50 select-none">
      <div className="container max-w-sm mx-auto space-y-12">
        
        {/* Header with plenty of room */}
        <div className="text-center space-y-3">
          <span className="text-[#E50914] font-black tracking-widest uppercase text-xs">Real Stories</span>
          <h2 className="text-3xl font-black text-gray-950 tracking-tight">수강생 후기</h2>
          <p className="text-sm text-gray-500 break-keep px-4 font-light">CNA를 통해 완전히 변화된 사람들의 이야기</p>
        </div>

        {/* Testimonials Stack (Spacious layouts for mobile) */}
        <div className="space-y-8">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-white border border-gray-200/80 rounded-[2.2rem] overflow-hidden flex flex-col shadow-sm hover:border-[#E50914]/45 transition-all duration-300"
            >
              {/* Image & Highlights block */}
              <div className="relative h-48 bg-gray-50">
                  <img 
                    src={test.image} 
                    alt={`Student ${test.id}`} 
                    className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                  {/* Blending Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-6 right-6 z-10">
                     {test.highlight1 && (
                       <span className="block text-[15px] font-semibold text-gray-800 leading-tight break-keep">
                         {test.highlight1}
                       </span>
                     )}
                     {test.highlight2 && (
                       <span className="block text-xl font-black text-[#E50914] leading-tight mt-1 break-keep tracking-tight">
                         {test.highlight2}
                       </span>
                     )}
                  </div>
              </div>

              {/* Content box with quotation icon and highly readable body font */}
              <div className="p-6 pb-8 flex-1 space-y-4">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 32 32">
                   <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.1c.5-2.2 2.5-4 4.9-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6.9c.5-2.2 2.5-4 4.9-4V8z"/>
                </svg>
                <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line font-light break-keep">
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
