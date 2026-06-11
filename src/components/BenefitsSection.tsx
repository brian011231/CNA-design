import { config } from '../config';

export function BenefitsSection() {
  const { benefits: data } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050505]">
      <div className="container max-w-6xl mx-auto space-y-16 md:space-y-32">
        
        {/* Headings */}
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-[#E50914] font-bold tracking-widest uppercase text-xs md:text-sm">
            {data.header}
          </p>
          <h2 
            className="text-4xl md:text-7xl font-black text-white leading-tight break-keep"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </div>

        <div className="space-y-20 md:space-y-32">
          {data.items.map((item, idx) => (
             <div key={item.id} className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className={`space-y-6 md:space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                   <div className="flex items-center space-x-3 md:space-x-4">
                      <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-transparent">
                         {item.number}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                         {item.short}
                      </h3>
                   </div>
                   
                   {/* If it has before/after (Item 1) */}
                   {item.beforeTitle ? (
                     <div className="space-y-4 md:space-y-6">
                        <div className="bg-[#111] p-5 md:p-6 rounded-2xl border border-gray-800">
                           <h4 className="text-gray-500 font-bold mb-1 md:mb-2">{item.beforeTitle}</h4>
                           <p className="text-sm md:text-base text-gray-400 break-keep">{item.beforeDesc}</p>
                        </div>
                        <div className="bg-gradient-to-r from-red-900/20 to-[#111] p-5 md:p-6 rounded-2xl border border-[#E50914]/30">
                           <h4 className="text-[#E50914] font-bold mb-1 md:mb-2">{item.afterTitle}</h4>
                           <p className="text-sm md:text-base text-white whitespace-pre-line leading-relaxed break-keep">{item.afterDesc}</p>
                        </div>
                     </div>
                   ) : (
                     <div 
                        className="text-base md:text-lg text-gray-400 font-light leading-relaxed whitespace-pre-line break-keep"
                        dangerouslySetInnerHTML={{ __html: item.desc || "" }}
                     />
                   )}
                </div>

                {/* Image Content */}
                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <div className="absolute inset-0 bg-[#E50914] rounded-2xl md:rounded-[2rem] translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-20"></div>
                   <div className="relative aspect-square md:aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#111] border border-white/10">
                      <img 
                        src={item.image} 
                        alt={item.short} 
                        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
