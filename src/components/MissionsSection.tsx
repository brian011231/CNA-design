import { config } from '../config';

export function MissionsSection() {
  const { missions: data } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#000]">
      <div className="container max-w-7xl mx-auto space-y-12 md:space-y-24">
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
           <h2 
             className="text-3xl md:text-6xl font-black text-white leading-tight break-keep"
             dangerouslySetInnerHTML={{ __html: data.header }}
           />
        </div>

        {/* Missions Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="group flex flex-col bg-[#111] rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-800 hover:border-[#E50914] transition-all duration-300">
               {/* Image Header */}
               <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#E50914]/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                        {item.title}
                     </span>
                  </div>
               </div>
               
               {/* Content */}
               <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-8 md:space-y-10">
                  <p className="text-base md:text-lg text-gray-300 whitespace-pre-line font-medium leading-relaxed break-keep">
                    {item.question}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gray-800 pt-5 md:pt-6">
                     <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold">Time Limit</span>
                     <span className="text-2xl md:text-3xl font-black font-mono tracking-widest text-[#E50914] drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">
                       {item.time}
                     </span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center max-w-3xl mx-auto pt-10">
          <div 
             className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed whitespace-pre-line"
             dangerouslySetInnerHTML={{ __html: data.closing }}
          />
        </div>

      </div>
    </section>
  );
}
