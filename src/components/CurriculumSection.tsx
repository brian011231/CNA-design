import { config } from '../config';

export function CurriculumSection() {
  const { curriculum: data } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#050505] border-t border-gray-900">
      <div className="container max-w-7xl mx-auto space-y-12 md:space-y-24">
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <span className="text-[#E50914] font-bold uppercase tracking-widest text-xs md:text-sm border border-[#E50914] px-4 py-2 rounded-full inline-block">
            {data.header}
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black text-white whitespace-pre-line leading-tight pt-4 md:pt-6 break-keep"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-gray-400 whitespace-pre-line text-base md:text-lg font-light break-keep">
            {data.desc}
          </p>
        </div>

        {/* 2x2 Grid for Curriculum */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {data.weeks.map((week) => (
            <div 
              key={week.id}
              className="bg-[#111] border border-gray-800 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col"
            >
               {/* Cover Image & Week Tag */}
               <div className="h-48 relative bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                  <img 
                    src={week.image} 
                    alt={week.title} 
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 z-20">
                     <span className="bg-[#E50914] text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        {week.week}
                     </span>
                  </div>
               </div>

               {/* Content */}
               <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1 md:mb-2">{week.title}</h3>
                  <h4 className="text-[#E50914] text-sm md:text-base font-semibold mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-800 break-keep">{week.subtitle}</h4>
                  
                  <div className="space-y-4 md:space-y-6 flex-1">
                    {week.items.map((item, i) => (
                      <div key={i}>
                        <h5 className="text-white font-bold mb-1 flex items-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2"></div>
                           {item.sub}
                        </h5>
                        <p className="text-gray-400 text-sm pl-3 font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {week.footer && (
                    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-800">
                      <p className="text-xs md:text-sm font-medium text-gray-300 bg-gray-900 inline-block px-3 md:px-4 py-2 rounded-lg break-keep">
                        {week.footer}
                      </p>
                    </div>
                  )}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
