import { config } from '../config';

export function PromisesSection() {
  const { promises: data } = config;

  return (
    <section className="py-24 px-6 bg-[#FCFBF9] text-gray-900 border-[#FCFBF9]/10 select-none">
      <div className="container max-w-sm mx-auto space-y-16">
        
        {/* Top Claims Header */}
        <div className="text-center">
           <h2 
             className="text-2xl font-black text-gray-950 whitespace-pre-line leading-tight tracking-tight break-keep"
             dangerouslySetInnerHTML={{ __html: data.title }}
           />
        </div>

        {/* Commitment Cards (Vertical Stack with Roomy Spacing) */}
        <div className="space-y-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200/85 rounded-[2rem] p-7 shadow-sm hover:border-[#E50914]/40 transition-colors"
            >
              <div className="w-9 h-9 bg-[#E50914]/10 rounded-full flex items-center justify-center mb-5">
                 <div className="w-2.5 h-2.5 bg-[#E50914] rounded-full"></div>
              </div>
              <h3 
                className="text-lg font-extrabold text-gray-950 mb-3 break-keep [&_strong]:text-[#E50914]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="text-[15px] text-gray-600 font-light leading-relaxed break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Card - styled as an exquisite premium editorial card on mobile */}
        <div className="rounded-[2.5rem] overflow-hidden bg-white border border-gray-200/85 shadow-md">
           <div className="p-7 flex flex-col space-y-7">
              <div className="space-y-2">
                <span className="text-[#E50914] font-bold text-xs uppercase tracking-widest">Philosophy</span>
                <h3 className="text-2xl font-black text-gray-950 tracking-tight leading-snug">
                  {data.philosophyTitle}
                </h3>
                <p className="text-base text-gray-400 italic">
                  {data.philosophyQuote}
                </p>
              </div>

              {/* Cover Image in modern ratio */}
              <div className="relative aspect-[16/10] bg-gray-100 rounded-[1.5rem] overflow-hidden border border-gray-200/50 shadow-sm">
                 <img 
                   src={data.image} 
                   alt="Philosophy" 
                   className="w-full h-full object-cover grayscale mix-blend-luminosity" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/15 to-transparent"></div>
              </div>

              <div 
                className="text-[15px] text-gray-700 font-light leading-relaxed whitespace-pre-line break-keep [&_strong]:text-gray-950 [&_strong]:font-black"
                dangerouslySetInnerHTML={{ __html: data.philosophyContent }}
              />
              
              <div 
                className="bg-red-50/70 p-6 rounded-[1.5rem] border-l-4 border-[#E50914] text-gray-800 font-medium text-xs break-keep [&_strong]:text-[#E50914] [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: data.philosophyWarning }}
              />
           </div>
        </div>

      </div>
    </section>
  );
}
