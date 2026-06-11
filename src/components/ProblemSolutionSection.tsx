import { config } from '../config';

export function ProblemSolutionSection() {
  const { problemSolution: data } = config;

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#050505]">
      <div className="container max-w-6xl mx-auto space-y-20 md:space-y-32">
        
        {/* Hook */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
           <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-5xl font-black italic text-gray-200 mb-6 md:mb-10 leading-tight break-keep text-center lg:text-left">
                {data.hook}
              </h2>
              <div 
                className="text-base md:text-lg text-gray-400 leading-relaxed whitespace-pre-line font-light break-keep text-center lg:text-left"
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
           </div>
           <div className="relative aspect-square order-1 lg:order-2 max-w-sm mx-auto w-full">
              <div className="absolute inset-0 bg-[#E50914] rounded-full blur-[100px] opacity-20"></div>
              <img 
                 src={data.image1} 
                 alt="Problem Abstract" 
                 className="w-full h-full object-cover rounded-[2rem] grayscale relative z-10"
                 referrerPolicy="no-referrer"
              />
           </div>
        </div>

        {/* Reason Box */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl md:rounded-[3rem] p-8 md:p-20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914] rounded-full blur-[120px] opacity-10"></div>
           
           <div className="grid lg:grid-cols-2 gap-10 md:gap-16 relative z-10">
              <div>
                 <span className="text-[#E50914] font-black text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">The Problem</span>
                 <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 break-keep">
                   {data.reasonTitle}
                 </h3>
                 <h4 
                   className="text-3xl md:text-5xl font-black mb-8 md:mb-10 leading-tight break-keep"
                   dangerouslySetInnerHTML={{ __html: data.reasonSubtitleRaw }}
                 />
              </div>
              <div>
                 <div 
                   className="text-sm md:text-base text-gray-400 font-light leading-relaxed whitespace-pre-line break-keep"
                   dangerouslySetInnerHTML={{ __html: data.reasonContent }}
                 />
              </div>
           </div>
        </div>

        {/* Start Point & Core */}
        <div className="space-y-12 md:space-y-16">
           <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
              <span className="text-[#E50914] font-black uppercase tracking-widest text-xs md:text-sm">The Solution</span>
              <h3 className="text-3xl md:text-5xl font-black text-white break-keep">
                {data.cnaStartTitle}
              </h3>
              <div 
                className="text-base md:text-xl font-light text-gray-400 leading-relaxed whitespace-pre-line text-left bg-[#111] p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-white/5 break-keep"
                dangerouslySetInnerHTML={{ __html: data.cnaStartContent }}
              />
           </div>

           <div className="text-center space-y-3 md:space-y-4 pt-6 md:pt-10">
             <h3 className="text-2xl md:text-4xl font-black text-white break-keep">
               {data.cnaCoreTitle}
             </h3>
             <p className="text-base md:text-lg text-gray-500 break-keep px-4">
               {data.cnaCoreSubtitle}
             </p>
           </div>

           {/* Core Grid */}
           <div className="grid md:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8">
             {data.cnaCores.map((core) => (
               <div key={core.id} className="bg-[#0a0a0a] border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-[#111] transition-colors">
                 <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-[#E50914] font-bold text-xl">{core.id}</span>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-4">
                   {core.title}
                 </h4>
                 <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                   {core.desc}
                 </p>
               </div>
             ))}
           </div>
        </div>

        {/* Relearn Banner */}
        <div className="bg-gradient-to-r from-[#E50914] to-red-900 text-white p-8 md:p-16 rounded-3xl md:rounded-[3rem] text-center shadow-2xl">
           <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 drop-shadow-md break-keep">
             {data.relearnTitle}
           </h3>
           <div 
             className="text-base md:text-xl font-medium leading-relaxed whitespace-pre-line max-w-3xl mx-auto break-keep"
             dangerouslySetInnerHTML={{ __html: data.relearnContent }}
           />
        </div>

      </div>
    </section>
  );
}
