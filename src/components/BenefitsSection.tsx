import { config } from '../config';

export function BenefitsSection() {
  const { benefits: data } = config;

  return (
    <section className="py-24 px-6 bg-[#FCFBF9] text-gray-900 border-b border-gray-200/60 select-none">
      <div className="container max-w-sm mx-auto space-y-16">
        
        {/* Headings with premium spacing */}
        <div className="text-center space-y-4">
          <p className="text-[#E50914] font-black tracking-widest uppercase text-xs">
            {data.header}
          </p>
          <h2 
            className="text-3xl font-black text-gray-950 leading-snug tracking-tight break-keep"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </div>

        {/* Benefits Stack: Very generous mobile-first spacing */}
        <div className="space-y-20">
          {data.items.map((item) => (
             <div key={item.id} className="space-y-8 border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                
                {/* Header / Number Badge */}
                <div className="flex items-center space-x-4">
                   <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#E50914] to-red-400">
                      {item.number}
                   </span>
                   <h3 className="text-[22px] font-black text-gray-950 tracking-tight">
                      {item.short}
                   </h3>
                </div>
                
                {/* Visual Anchor: Refined aspect ratio for modern mobile viewport */}
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200/50 shadow-md">
                   <img 
                     src={item.image} 
                     alt={item.short} 
                     className="w-full h-full object-cover grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                     referrerPolicy="no-referrer"
                   />
                </div>

                {/* Content Block */}
                {item.beforeTitle ? (
                  <div className="space-y-4">
                     <div className="bg-gray-50 p-6 rounded-[1.5rem] border border-gray-200/80">
                        <h4 className="text-gray-500 font-extrabold text-xs uppercase tracking-wide mb-1">{item.beforeTitle}</h4>
                        <p className="text-[15px] text-gray-700 leading-relaxed break-keep font-light">{item.beforeDesc}</p>
                     </div>
                     <div className="bg-red-50/70 p-6 rounded-[1.5rem] border border-[#E50914]/20 shadow-sm shadow-red-50/50">
                        <h4 className="text-[#E50914] font-extrabold text-xs uppercase tracking-wide mb-1">{item.afterTitle}</h4>
                        <p className="text-[16px] text-gray-950 leading-relaxed whitespace-pre-line break-keep font-semibold">{item.afterDesc}</p>
                     </div>
                  </div>
                ) : (
                  <div 
                     className="text-[16px] text-gray-700 leading-relaxed font-light break-keep px-1 whitespace-pre-line space-y-4 [&_strong]:text-gray-950 [&_strong]:font-black"
                     dangerouslySetInnerHTML={{ __html: item.desc || "" }}
                  />
                )}
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
