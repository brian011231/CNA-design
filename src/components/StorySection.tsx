import { MessageSquare, Compass, Fingerprint, Sparkles, Image } from 'lucide-react';

export function StorySection() {
  return (
    <section className="relative py-28 px-6 bg-[#050505] text-gray-200 select-none overflow-hidden border-t border-gray-900/40">
      
      {/* Decorative clean ambient focal point */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container max-w-sm mx-auto relative z-10 space-y-20">
        
        {/* 1. Speech Bubble Transition Icon */}
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="w-14 h-14 bg-[#111] border border-gray-800/80 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
            <MessageSquare className="w-6 h-6 text-gray-400" />
          </div>
          <div className="h-10 w-px bg-gradient-to-b from-[#E50914]/40 to-transparent mt-4 opacity-70"></div>
        </div>

        {/* 2. Story Card 1: The Deep Breakdown (여자친구의 바람) */}
        <div className="p-8 pb-10 bg-[#0C0B0B] border border-gray-900/60 rounded-[2.5rem] shadow-3xl text-left space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-[60px]"></div>
          
          <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep">
            <span className="text-white font-extrabold pr-1 text-[19px]">20대 초반</span>, 여자친구의 세 번째 바람을 알게되던 날 
            저는 이렇게 비참하게 살 바에는 <strong className="text-red-500 font-extrabold whitespace-nowrap">죽는 것이 낫겠다</strong>는 생각을 했어요.
          </p>

          <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep border-t border-gray-900/60 pt-6">
            옥상 위에서 혼자 씨름하다가 마지막이라는 생각으로 유명 <strong className="text-white font-extrabold">연애교육 업체</strong>에 찾아가게 됩니다.
          </p>
        </div>

        {/* 3. Story Card 2: The Trap of Memorized Scripts (암기와 실패) */}
        <div className="p-8 pb-10 bg-[#0C0B0B] border border-gray-900/60 rounded-[2.5rem] shadow-3xl space-y-8 relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-950/10 rounded-full blur-[60px]"></div>

          <div className="space-y-6">
            <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep">
              절박함 하나로 그곳에서 배운 멘트를 <strong className="text-white font-extrabold bg-[#1A1919] px-2 py-1 rounded border border-gray-850">한달 내내 독서실</strong>에서 암기했습니다.
            </p>

            <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep">
              대망의 소개팅 날, 정말 신기하게도 강의에서 봤던 상황들이 마치 <strong className="text-white font-extrabold">기출 문제처럼</strong> 쏟아졌습니다.
            </p>

            <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep">
              저는 암기했던대로 차분히 그리고 담담하게 멘트를 읊었습니다.
            </p>
          </div>

          <div className="border-t border-gray-900/80 pt-8 space-y-6">
            <p className="text-[18px] sm:text-[19px] text-red-500 font-extrabold leading-[1.7] break-keep italic">
              “하지만 시간이 지날수록 그녀의 표정은 굳어가고..”
            </p>

            <p className="text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep">
              암기한 멘트가 고갈되어 갈수록 내면은 지진이 일어난 것처럼 불안정했습니다.
            </p>

            <p className="text-[18px] sm:text-[19px] text-white font-extrabold leading-[1.8] break-keep bg-[#161212] p-5 rounded-2xl border border-red-950/40">
              그제서야 알았어요. 그때 암기한 멘트들은 <span className="text-[#E50914] underline underline-offset-4 decoration-2 font-black">‘제 것’이 아니었다는걸요.</span>
            </p>

            <p className="text-[17px] sm:text-[18px] text-gray-400 font-light leading-[1.8] break-keep">
              저는 저의 생각이 별로라고 믿었기 때문에, <strong className="text-white">남의 생각을 빌려서</strong> 말하려고 했던 것이었습니다.
            </p>
          </div>
        </div>

        {/* 4. Story Card 3: Deep Anatomy & Breakthrough (분석심리학과 자아해부) */}
        <div className="p-8 pb-10 bg-[#0C0B0B] border border-gray-900/60 rounded-[2.5rem] shadow-3xl text-left space-y-8 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-[60px]"></div>

          <p className="text-[18px] sm:text-[19px] text-white font-extrabold leading-[1.8] break-keep">
            그날 이후 저는 제 스스로를 해부하기 시작했습니다.
          </p>

          <div className="space-y-6 text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep border-t border-gray-900/80 pt-6">
            <p>
              매력적인 화술을 체화하기 위해서 매일밤 <strong className="text-white">분석 심리학 서적</strong>을 메모하며 내면을 들여다보고, 깨우치고, 새로운 것들로 채워넣어야 했습니다.
            </p>
            <p className="text-gray-400">
              지구에서 가장 말을 잘한다고 알려진 연예인, 정치인, 선동가들의 언어를 수천번 반복해서 들으며 그들의 대화, 행동 패턴들을 분석하였습니다.
            </p>
          </div>
        </div>

        {/* 5. Story Card 4: Complete Breakthrough - The Birth of CNA (CNA의 탄생) */}
        <div className="p-8 pb-10 bg-[#0C0B0B] border border-[#E50914]/20 rounded-[2.5rem] shadow-3xl text-left space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#E50914]/10 rounded-full blur-[70px] pointer-events-none"></div>

          <h4 className="text-[21px] sm:text-[22px] font-black text-white leading-snug tracking-tight break-keep">
            그렇게해서 탄생시킨 것이 바로 <span className="text-[#E50914]">CNA 시스템</span>입니다.
          </h4>

          <div className="space-y-6 text-[17px] sm:text-[18px] text-gray-300 font-light leading-[1.8] break-keep border-t border-gray-900/80 pt-6">
            <p>
              지난 3년간 매력이 부족한 남자들에게 필요한 화술의 원리를 하나의 강의로 정리하였습니다.
            </p>
            
            <p className="text-[18px] sm:text-[19px] font-bold text-white bg-[#1A1111] p-4 rounded-xl border border-red-900/30">
              그 커리큘럼을 <span className="text-[#E50914] font-black">4회차</span>에 걸쳐 만든 강의가 CNA 입니다.
            </p>

            <p className="text-gray-400">
              모태솔로 수강생, 고집 쎈 수강생 등 모두가 포기할거라 예상했던 수강생들도 CNA 시스템을 적용하고나서 유연한 남자로 변화하였습니다.
            </p>
          </div>
        </div>

        {/* 6. Huge High-impact Punchline (말은 1/3, 매력 3배) */}
        <div className="text-center py-2 relative">
          <p className="text-[25px] sm:text-[28px] font-black text-white tracking-tight leading-snug break-keep">
            말은 <span className="text-[#E50914]">1/3</span>으로 줄고<br />
            매력은 <span className="text-[#E50914]">3배</span>로 늘었죠.
          </p>
        </div>

        {/* ========================================================
            7. NEW: PREMIUM TRANSFORMATIONS (3번 사진의 리얼 고가독성 후기) 
            ======================================================== */}
        <div className="pt-16 space-y-16">
          <div className="text-center space-y-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#E50914] to-transparent mx-auto"></div>
            <h3 className="text-lg font-bold tracking-widest text-zinc-500 uppercase font-mono">
              REAL TRANSFORMATIONS
            </h3>
            <p className="text-2xl font-black text-white leading-snug tracking-tight break-keep px-4">
              단순 기술 그 이상,<br />
              <span className="text-[#E50914]">수강생들이 경험한 CNA의 본질</span>
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 3-1. 내면을 바꾸는 강의 */}
            <div className="p-8 bg-[#0C0B0B] border border-zinc-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col space-y-6">
              <div className="absolute top-5 right-6 text-[#E50914]/10 pointer-events-none">
                <Compass className="w-16 h-16 stroke-[1.25]" />
              </div>

              <div className="space-y-1 z-10">
                <h4 className="text-[19px] font-black text-white leading-snug tracking-tight break-keep pr-12">
                  커뮤니케이션 DNA를 고치는 것을 넘어, <span className="text-[#E50914]">내면을 바꾸는 강의</span>
                </h4>
              </div>

              {/* Ultra-Premium Glass Review Image Placeholder Slot */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-dashed border-[#E50914]/20 bg-zinc-950 p-[3px] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E50914]/5 via-transparent to-transparent opacity-40"></div>
                <div className="flex flex-col items-center justify-center py-16 px-4 bg-zinc-950/90 rounded-2xl border border-zinc-900 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-700 transition-all duration-300">
                    <Image className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px] font-black text-zinc-400 tracking-tight">수강생의 실제 생생한 톡 후기</p>
                    <p className="text-[11px] text-zinc-600 font-medium tracking-wide">IMAGE PLACEHOLDER SLOT</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500 z-10 font-mono">
                <span>CNA 1기 송OO님</span>
                <span className="text-[#E50914]/80 font-bold">Verified Review</span>
              </div>
            </div>

            {/* 3-2. 나만의 대화방식을 찾는 강의 */}
            <div className="p-8 bg-[#0C0B0B] border border-zinc-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col space-y-6">
              <div className="absolute top-5 right-6 text-[#E50914]/10 pointer-events-none">
                <Fingerprint className="w-16 h-16 stroke-[1.25]" />
              </div>

              <div className="space-y-1 z-10">
                <h4 className="text-[19px] font-black text-white leading-snug tracking-tight break-keep pr-12">
                  정답 복사가 아닌 <span className="text-[#E50914]">나만의 대화방식을 찾는 강의</span>
                </h4>
              </div>

              {/* Ultra-Premium Glass Review Image Placeholder Slot */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-dashed border-[#E50914]/20 bg-zinc-950 p-[3px] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E50914]/5 via-transparent to-transparent opacity-40"></div>
                <div className="flex flex-col items-center justify-center py-16 px-4 bg-zinc-950/90 rounded-2xl border border-zinc-900 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-700 transition-all duration-300">
                    <Image className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px] font-black text-zinc-400 tracking-tight">수강생의 실제 생생한 톡 후기</p>
                    <p className="text-[11px] text-zinc-600 font-medium tracking-wide">IMAGE PLACEHOLDER SLOT</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500 z-10 font-mono">
                <span>CNA 1기 이OO님</span>
                <span className="text-[#E50914]/80 font-bold">Verified Review</span>
              </div>
            </div>

            {/* 3-3. 감각으로 느껴지며 실제 체화하는 강의 */}
            <div className="p-8 bg-[#0C0B0B] border border-zinc-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col space-y-6">
              <div className="absolute top-5 right-6 text-[#E50914]/10 pointer-events-none">
                <Sparkles className="w-16 h-16 stroke-[1.25]" />
              </div>

              <div className="space-y-1 z-10">
                <h4 className="text-[19px] font-black text-white leading-snug tracking-tight break-keep pr-12">
                  감각으로 느껴지며 <span className="text-[#E50914]">실제 완전히 체화하는 강의</span>
                </h4>
              </div>

              {/* Ultra-Premium Glass Review Image Placeholder Slot */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-dashed border-[#E50914]/20 bg-zinc-950 p-[3px] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E50914]/5 via-transparent to-transparent opacity-40"></div>
                <div className="flex flex-col items-center justify-center py-16 px-4 bg-zinc-950/90 rounded-2xl border border-zinc-900 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-700 transition-all duration-300">
                    <Image className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px] font-black text-zinc-400 tracking-tight">수강생의 실제 생생한 톡 후기</p>
                    <p className="text-[11px] text-zinc-600 font-medium tracking-wide">IMAGE PLACEHOLDER SLOT</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500 z-10 font-mono">
                <span>CNA 1기 정OO님</span>
                <span className="text-[#E50914]/80 font-bold">Verified Review</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
