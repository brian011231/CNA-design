import { config } from '../config';

export function PromisesSection() {
  const { promises: data } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#0a0a0a]">
      <div className="container max-w-7xl mx-auto space-y-16 md:space-y-32">
        
        {/* Top Claims */}
        <div className="grid lg:grid-cols-4 gap-8 md:gap-10">
          <div className="lg:col-span-1 text-center lg:text-left">
             <h2 
               className="text-3xl md:text-4xl font-black text-white whitespace-pre-line leading-tight break-keep"
               dangerouslySetInnerHTML={{ __html: data.title }}
             />
          </div>
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-4 md:gap-6">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="bg-[#111] border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-[#E50914]/50 transition-colors"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E50914]/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-[#E50914] rounded-full"></div>
                </div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 break-keep"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden bg-[#111] border border-white/5">
           <div className="grid lg:grid-cols-2">
              <div className="p-6 md:p-20 flex flex-col justify-center space-y-8 md:space-y-10 relative z-10">
                 <div className="space-y-3 md:space-y-4">
                   <span className="text-[#E50914] font-bold text-xs md:text-sm uppercase tracking-widest">Philosophy</span>
                   <h3 className="text-3xl md:text-5xl font-black text-white">
                     {data.philosophyTitle}
                   </h3>
                   <p className="text-lg md:text-xl text-gray-500 italic">
                     {data.philosophyQuote}
                   </p>
                 </div>

                 <div 
                   className="text-base md:text-lg text-gray-400 font-light leading-relaxed whitespace-pre-line break-keep"
                   dangerouslySetInnerHTML={{ __html: data.philosophyContent }}
                 />
                 
                 <div 
                   className="bg-[#0a0a0a] p-5 md:p-6 rounded-2xl border-l-4 border-[#E50914] text-gray-300 font-medium text-sm md:text-base break-keep"
                   dangerouslySetInnerHTML={{ __html: data.philosophyWarning }}
                 />
              </div>
              <div className="relative hidden lg:block">
                 <img 
                   src={data.image} 
                   alt="Philosophy" 
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
