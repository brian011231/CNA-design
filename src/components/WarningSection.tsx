import { config } from '../config';

export function WarningSection() {
  const { warning: data } = config;

  return (
    <section className="py-24 px-6 bg-[#050505] select-none">
      <div className="container max-w-sm mx-auto">
        <div className="border border-[#E50914]/25 bg-[#0D0C0C] rounded-[2.5rem] p-8 text-center space-y-6 shadow-2xl relative overflow-hidden pt-10 pb-10">
          
          {/* subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#E50914] blur-[80px] opacity-[0.12] pointer-events-none"></div>
          
          <div className="w-14 h-14 bg-black border border-gray-800 rounded-2xl mx-auto flex items-center justify-center mb-2 relative z-10">
            <svg className="w-7 h-7 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <h2 
            className="text-xl font-black text-white leading-snug tracking-tight relative z-10 break-keep px-1 [&_span]:text-[#E50914]"
            dangerouslySetInnerHTML={{ __html: data.titleRaw }}
          />

          <p 
            className="text-gray-400 whitespace-pre-line text-[15px] font-light leading-relaxed pt-2 relative z-10 break-keep px-1 [&_strong]:text-white [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </div>
    </section>
  );
}
