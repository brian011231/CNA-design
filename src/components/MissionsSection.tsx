import { config } from '../config';

export function MissionsSection() {
  const { missions: data } = config;

  return (
    <section className="py-24 px-6 bg-[#030303] border-t border-gray-900 select-none">
      <div className="container max-w-sm mx-auto space-y-14">
        
        {/* Header with plenty of space */}
        <div className="text-center space-y-3">
           <h2 
             className="text-2xl font-black text-white leading-snug break-keep tracking-tight"
             dangerouslySetInnerHTML={{ __html: data.header }}
           />
        </div>

        {/* Missions Stack (Vertically Stacked with Roomy Spacing for Mobile) */}
        <div className="space-y-6">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0D0C0C] rounded-[2rem] border border-gray-900 p-7 flex flex-col space-y-6 shadow-2xl"
            >
               {/* Accent Badge & Limit info */}
               <div className="flex items-center justify-between">
                  <span className="bg-[#E50914]/10 text-[#E50914] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E50914]/20 uppercase tracking-widest">
                     {item.title}
                  </span>
                  
                  <div className="flex items-center space-x-2 bg-black px-3 py-1 rounded-lg border border-gray-900">
                     <span className="text-gray-650 text-[10px] uppercase font-black tracking-widest text-gray-500">Limit</span>
                     <span className="text-sm font-black font-mono tracking-wider text-[#E50914]">
                       {item.time}
                     </span>
                  </div>
               </div>
               
               {/* Question / Task definition (Generous line height and readable size) */}
               <p className="text-[17px] text-gray-200 whitespace-pre-line font-medium leading-relaxed break-keep">
                 {item.question}
               </p>
            </div>
          ))}
        </div>

        {/* Closing with generous spacing */}
        <div className="text-center pt-6">
          <div 
             className="text-[17px] font-light text-gray-450 text-gray-400 leading-relaxed whitespace-pre-line px-2 [&_strong]:text-white [&_strong]:font-black [&_strong]:text-xl [&_strong]:block [&_strong]:mt-4 [&_strong]:leading-snug"
             dangerouslySetInnerHTML={{ __html: data.closing }}
          />
        </div>

      </div>
    </section>
  );
}
