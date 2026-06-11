import { config } from '../config';

export function StorySection() {
  const { story: data } = config;

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-[#050505] overflow-hidden border-t border-gray-900">
      <div className="container max-w-5xl mx-auto relative z-10 space-y-16 md:space-y-24">
        
        {/* Timeline Story */}
        <div className="space-y-10 md:space-y-16">
          <div className="text-center mb-10 md:mb-16">
             <span className="text-[#E50914] font-bold text-xs md:text-sm uppercase tracking-widest">The Story</span>
             <h3 className="text-3xl md:text-5xl font-black text-white mt-3 md:mt-4 break-keep">{data.title}</h3>
          </div>

          <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2"></div>
             
             <div className="space-y-8 md:space-y-12">
               {data.timeline.map((step, idx) => (
                 <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Node marker */}
                    <div className="absolute left-[16px] md:left-1/2 w-3 h-3 bg-[#E50914] rounded-full transform -translate-x-1/2 mt-3 md:mt-0 shadow-[0_0_10px_rgba(229,9,20,0.8)]"></div>
                    
                    <div className={`pl-10 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                       <div className="bg-[#111] p-6 md:p-8 border border-gray-800 rounded-2xl md:rounded-3xl hover:border-[#E50914]/50 transition-colors">
                          <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h4>
                          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed break-keep">{step.content}</p>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Final Closing */}
        <div className="text-center pt-6 md:pt-10">
          <p className="text-2xl md:text-4xl font-black text-[#E50914] whitespace-pre-line tracking-tight break-keep">
             "{data.closingHighlight}"
          </p>
        </div>

      </div>
    </section>
  );
}
