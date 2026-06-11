import { config } from '../config';

export function WarningSection() {
  const { warning: data } = config;

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0a0a0a]">
      <div className="container max-w-4xl mx-auto">
        <div className="border border-[#E50914]/30 bg-[#111] rounded-[2rem] p-8 md:p-16 text-center space-y-5 md:space-y-6 shadow-2xl relative overflow-hidden">
          {/* subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#E50914] blur-[100px] opacity-20 pointer-events-none"></div>
          
          <div className="w-16 h-16 bg-black border border-gray-800 rounded-2xl mx-auto flex items-center justify-center mb-4 relative z-10">
            <svg className="w-8 h-8 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 
            className="text-xl md:text-3xl font-black text-white leading-tight relative z-10 break-keep"
            dangerouslySetInnerHTML={{ __html: data.titleRaw }}
          />
          <p 
            className="text-gray-400 whitespace-pre-line text-base md:text-lg font-light pt-2 md:pt-4 relative z-10 break-keep"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </div>
    </section>
  );
}
