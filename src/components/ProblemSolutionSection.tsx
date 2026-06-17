import { Eye, Clock, Layers, MessageSquare, AlertTriangle, HelpCircle, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <>
      {/* 1. Problem Part: Premium Dark Background */}
      <section className="py-32 px-6 bg-[#050505] text-gray-100 relative overflow-hidden border-t border-zinc-900/60">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container max-w-sm mx-auto space-y-28">
          
          {/* A. Hook & Main Question with Generous Spacing */}
          <div className="space-y-16 text-center">
            {/* The Hook Statement */}
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25rem] text-[#E50914] uppercase font-mono block">
                THE TRUTH
              </span>
              <h2 className="text-[22px] sm:text-[24px] font-black italic text-zinc-300 tracking-tight leading-snug break-keep">
                “수많은 말투·대화법을 따라 했는데...”
              </h2>
            </div>

            {/* Glowing Accent Bullet */}
            <div className="flex justify-center items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping absolute"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]"></div>
            </div>

            {/* Pivot Question - Given massive space & visual weight */}
            <div className="space-y-3">
              <p className="text-[25px] sm:text-[27px] font-black text-white tracking-tight leading-snug break-keep">
                진짜 관계가 달라졌던 적,<br />
                <span className="text-[#E50914] underline underline-offset-4 decoration-2">단 한 번이라도</span> 있었나요?
              </p>
            </div>
          </div>

          {/* B. The 'Formula' Illusion vs Reality */}
          <div className="space-y-16 text-left">
            <div className="space-y-6">
              <p className="text-[17px] sm:text-[18px] text-zinc-400 font-light leading-[1.8] break-keep">
                우리는 정말 오랫동안<br />
                <span className="text-white font-medium">“이 상황에선 이렇게 답하세요”</span>, <span className="text-white font-medium">“여자에게 이렇게 말해야 합니다”</span> 같은 공식과 대사들을 수도 없이 들어왔습니다.
              </p>
            </div>

            {/* Creative Dialogue Wave Block: Representing lifeless canned formula */}
            <div className="bg-[#0C0B0B] border border-zinc-900 rounded-[2rem] p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E50914]/5 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-mono">
                  말
                </div>
                <div className="bg-zinc-900 text-zinc-300 text-[14px] p-3 rounded-2xl rounded-tl-sm border border-zinc-800/60 max-w-[85%] break-keep">
                  이 대사 외워서 그대로 써먹어보세요. 무조건 먹힙니다!
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-[#1A0E0F] text-zinc-400 text-[14px] p-3 rounded-2xl rounded-tr-sm border border-red-950/40 max-w-[85%] break-keep">
                  (소개팅 적용 후...) 상대방 반응이 왜이리 어색하지..?
                </div>
                <div className="w-8 h-8 rounded-lg bg-red-950/20 border border-red-900/30 flex items-center justify-center text-xs text-[#E50914] font-mono">
                  나
                </div>
              </div>
            </div>

            <p className="text-[18px] sm:text-[19px] text-[#E50914] font-bold tracking-tight text-center leading-[1.6]">
              근데... 현실에선 어땠나요?
            </p>

            <p className="text-[17px] sm:text-[18px] text-zinc-300 font-light leading-[1.8] break-keep text-center">
              말은 분명 배웠는데 상대의 반응은 미지근하고,<br />
              내가 한 말은 <strong className="text-white font-semibold">허공에 덧없이 스쳐 지나가는</strong> 느낌을 받진 않으셨나요?
            </p>
          </div>

          {/* C. Tragic Self-Blame & Spotlight Pivot (Generous gaps) */}
          <div className="space-y-16">
            <div className="space-y-5 bg-[#0A0A0A] border border-zinc-950 p-6 rounded-2xl shadow-inner text-center">
              <p className="text-[15px] text-zinc-500 italic break-keep leading-relaxed">
                “아... 난 센스가 원래 없는 사람인가 보다...”
              </p>
              <div className="w-3 h-px bg-zinc-800 mx-auto"></div>
              <p className="text-[15px] text-zinc-500 italic break-keep leading-relaxed">
                “역시 말재주 하나만큼은 타고나는 거구나...”
              </p>
            </div>

            {/* Massive Bold Pivot block with high-contrast spotlight glow */}
            <div className="bg-gradient-to-br from-[#120B0B] to-[#050505] border border-[#E50914]/25 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/10 rounded-full blur-[50px] pointer-events-none"></div>
              
              <div className="space-y-4 text-center">
                <span className="text-[#E50914] font-mono text-[11px] uppercase tracking-widest font-black block">
                  Re-evaluation
                </span>
                <p className="text-[20px] sm:text-[22px] font-black text-white tracking-tight leading-snug break-keep">
                  그런데 문제의 본질이<br />
                  당신의 능력이 아니라,
                </p>
                <div className="py-2">
                  <span className="text-[23px] sm:text-[26px] font-extrabold text-[#E50914] border-b-2 border-[#E50914]/40 pb-1.5 tracking-tight break-keep block">
                    '배운 방식 자체가 틀렸던 것'
                  </span>
                </div>
                <p className="text-[18px] font-black text-zinc-300 tracking-tight">
                  이라면 어떨까요?
                </p>
              </div>
            </div>
          </div>

          {/* D. Major Failures Segment - Real radar sensor analysis style */}
          <div className="space-y-10">
            <div className="space-y-3 text-center">
              <div className="inline-flex items-center space-x-1 bg-red-950/20 border border-red-900/30 px-3 py-1.5 rounded-full text-[#E50914]">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Core System Alert</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-black text-white tracking-tight break-keep pt-2">
                대부분의 사람들이 대화에 실패하는 진짜 이유
              </h3>
              <p className="text-[17px] font-extrabold text-zinc-400 break-keep pt-1">
                “대화의 본질”을 모르기 때문입니다.
              </p>
            </div>

            <div className="text-[15.5px] text-zinc-400 font-light leading-[1.8] space-y-6 text-left break-keep">
              <p>
                대부분의 사람들은 대화를 일종의 <strong className="text-white font-semibold">‘정답 맞히기 주관식 게임’</strong>으로 생각합니다. <br />
                그래서 머릿속 속사정은 항상 이런 무한 루프의 망상으로 가득 차서 돌고 있죠.
              </p>

              {/* Pill thought badges representing mental loop */}
              <div className="flex flex-wrap gap-2 pt-2 justify-center">
                <span className="px-3 py-2 rounded-xl bg-[#111] border border-zinc-800 text-xs text-zinc-400 font-medium">
                  "이 상황에서 뭐라고 말해야 어조가 맞지?"
                </span>
                <span className="px-3 py-2 rounded-xl bg-[#111] border border-zinc-800 text-xs text-zinc-400 font-medium">
                  "이 기법 쓰면 오해받거나 부담스러워할까?"
                </span>
                <span className="px-3 py-2 rounded-xl bg-[#111] border border-zinc-800 text-xs text-zinc-400 font-medium">
                  "지금은 칭찬 타임인가? 아니면 격한 공감?"
                </span>
              </div>

              <p className="text-center text-zinc-300 font-medium pt-4">
                하지만 이렇게 기계적인 '공식'만 찾으려고 하면,<br />
                대화에서 <span className="text-[#E50914] font-bold">정작 핵심적인 것들</span>을 전부 놓칩니다.
              </p>
            </div>

            {/* Radar Blind Indicator: missing conversational sensor dashboard */}
            <div className="bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] p-7 space-y-6 relative overflow-hidden">
              <span className="text-[11px] font-black tracking-widest text-[#E50914]/80 uppercase font-mono block">
                🔴 Conversational Radar Status: BLIND
              </span>
              
              <div className="space-y-4 font-mono">
                {/* Sensor 1 */}
                <div className="flex items-center justify-between text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 font-medium">01 상대의 미세한 표정 변화</span>
                  <span className="text-[#E50914]/80 font-bold bg-[#1C0F10] px-2 py-0.5 rounded uppercase text-[10px] tracking-wider animate-pulse">
                    UNREADABLE
                  </span>
                </div>
                {/* Sensor 2 */}
                <div className="flex items-center justify-between text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 font-medium">02 주고받는 말소리의 속도 편차</span>
                  <span className="text-[#E50914]/80 font-bold bg-[#1C0F10] px-2 py-0.5 rounded uppercase text-[10px] tracking-wider">
                    UNREADABLE
                  </span>
                </div>
                {/* Sensor 3 */}
                <div className="flex items-center justify-between text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 font-medium">03 신체 호흡과 텐션의 리듬</span>
                  <span className="text-[#E50914]/80 font-bold bg-[#1C0F10] px-2 py-0.5 rounded uppercase text-[10px] tracking-wider animate-pulse">
                    UNREADABLE
                  </span>
                </div>
                {/* Sensor 4 */}
                <div className="flex items-center justify-between text-xs border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 font-medium">04 감정의 미세한 파장과 떨림</span>
                  <span className="text-[#E50914]/80 font-bold bg-[#1C0F10] px-2 py-0.5 rounded uppercase text-[10px] tracking-wider">
                    UNREADABLE
                  </span>
                </div>
                {/* Sensor 5 */}
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-zinc-500 font-medium">05 공간 전체에 깔린 분위기 흐름</span>
                  <span className="text-[#E50914]/80 font-bold bg-[#1C0F10] px-2 py-0.5 rounded uppercase text-[10px] tracking-wider">
                    UNREADABLE
                  </span>
                </div>
              </div>

              <div className="bg-[#161213] border border-red-950/40 p-4 rounded-xl">
                <p className="text-[13px] text-zinc-300 leading-relaxed text-center break-keep">
                  상대방을 관찰하는 '상황 판단 신호' 오감을 원천적으로 닫아버린 채 구시대 공식만 내뱉으니, 당연히 망할 수밖에 없죠.
                </p>
              </div>
            </div>

            {/* Ultimate Tragic Collapse List */}
            <div className="space-y-6 pt-4">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider block text-center">그리고 그 끝에는...</span>
              
              <div className="space-y-4">
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E50914]"></div>
                  <span className="text-[15px] font-bold text-zinc-300">외운 기계적 멘트는 단 5분 만에 바닥나고</span>
                </div>
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E50914]"></div>
                  <span className="text-[15px] font-bold text-zinc-300">상황이 비틀리는 순간 머릿속이 새하얘지며</span>
                </div>
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E50914]"></div>
                  <span className="text-[15px] font-bold text-zinc-300">관계에 대한 자신감은 바닥 아래로 추락합니다.</span>
                </div>
              </div>

              {/* The YoYo Warning Box */}
              <div className="p-6 bg-[#160E0F] border border-red-950/40 rounded-2xl space-y-2 mt-2">
                <p className="text-[15px] font-black text-[#E50914] text-center">
                  이것이 대화의 요요현상입니다!
                </p>
                <p className="text-[12.5px] text-zinc-400 text-center leading-relaxed font-light break-keep">
                  이 대사 저 멘트를 아무리 일시적으로 수렵하고 외우려 해봤자, 정작 본질적인 오감을 키우지 못하면 다시 어색한 과거로 원상 복구됩니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Solution Part: Premium Light Theme Transition */}
      <section className="py-32 px-6 bg-[#FCFBF9] text-gray-900 border-t border-b border-zinc-200/50 relative overflow-hidden">
        {/* Absolute subtle light dynamic backdrop */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-zinc-100/50 to-transparent pointer-events-none"></div>

        <div className="container max-w-sm mx-auto space-y-28 relative z-10">
          
          {/* A. The Pivot Announcement with Elegant Spatial Layout */}
          <div className="space-y-12 text-center">
            <div className="space-y-3">
              <span className="text-[#E50914] font-black uppercase tracking-widest text-[11px] font-mono block">
                THE SOLUTION
              </span>
              <h3 className="text-[27px] sm:text-[29px] font-black text-gray-950 tracking-tight leading-snug break-keep">
                CNA는 바로<br />
                여기서 시작됩니다.
              </h3>
            </div>

            {/* Clean, spacious layout representation of solution */}
            <div className="space-y-6 text-[16px] sm:text-[17px] text-zinc-700 font-light leading-[1.8] text-left break-keep bg-white p-8 rounded-[2.5rem] border border-zinc-200/70 shadow-xl shadow-zinc-200/30">
              <p>
                대화는 소위 말하는 '말빨'이 좋다고 이루어지는 것이 절대 아닙니다. 문구나 임시방편 멘트를 외운다고 해서 평생 영구적으로 극복되는 것도 결코 아니에요.
              </p>
              <p className="font-semibold text-zinc-950">
                인간관계의 질을 결정짓는 진짜 본질은 단 하나뿐입니다.
              </p>
            </div>

            {/* The Solid Modern Container - Extremely Clear, Modern & Legit (No complex background gradients) */}
            <div className="my-10 bg-zinc-950 text-white rounded-3xl p-8 py-10 shadow-2xl relative overflow-hidden text-center select-none border border-zinc-900">
              <span className="text-[10px] font-bold uppercase tracking-[0.2rem] text-[#E50914] block mb-4 font-mono">
                THE ULTIMATE CORE
              </span>
              <p className="text-[21px] sm:text-[23px] font-black tracking-tight leading-relaxed text-white break-keep">
                “상대의 감정·표정·신호를<br />
                해석하는 능력”
              </p>
              <div className="w-6 h-0.5 bg-[#E50914]/40 mx-auto mt-5"></div>
              <p className="text-xs text-zinc-400 font-mono tracking-wide mt-4 uppercase">
                Conversational Signal Calibration
              </p>
            </div>

            {/* Summary explanation block */}
            <div className="text-left space-y-6 text-[16px] sm:text-[17px] text-zinc-700 font-light leading-[1.8] break-keep">
              <p>
                대화의 무려 <span className="text-gray-950 font-extrabold text-[18px]">90%</span>는 여기서 순식간에 결정됩니다. 
              </p>
              <p>
                쉽게 말해서 말을 시끄럽게 '잘' 하는 사람이 아니라, 상대방을 차분히 <strong className="text-gray-950 font-extrabold">'읽어내는'</strong> 사람이 소셜 현장과 대화에서 절대 우위를 가집니다.
              </p>
              <p className="bg-[#FFF5F5] border border-red-100 p-5 rounded-2xl text-[15.5px] leading-relaxed font-bold text-[#E50914] text-center">
                그리고 이 강력한 해독 감각은 천부적 재능이 아니라,<br />
                방법만 제대로 알면 누구나 훈련 가능한 '기술'입니다.
              </p>
            </div>
          </div>

          {/* B. Core Pillars with Stunning Apple-style clean UI cards */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] mx-auto"></div>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight break-keep">
                그래서 CNA의 핵심은<br />
                말투가 아닙니다.
              </h3>
              <p className="text-[14px] text-zinc-500 font-medium break-keep">
                당신이 그동안 단 한 번도 접해보지 못했던,<br />
                완전히 차원이 다른 정공법입니다.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white border border-zinc-200/80 rounded-[2.2rem] p-8 shadow-md hover:shadow-xl hover:border-red-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-[#E50914]" />
                </div>
                <h4 className="text-[19px] font-black text-gray-950 tracking-tight mb-3">
                  01 미세한 감정 읽기
                </h4>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 font-light leading-[1.75] break-keep">
                  찰나의 표정·소리 속도·공기 속 호흡만으로 보이지 않는 감정을 기가 막히게 파악하고, 말보다 빠르게 흘러나오는 미세한 본능 신호들을 명확히 구분하는 감각입니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-zinc-200/80 rounded-[2.2rem] p-8 shadow-md hover:shadow-xl hover:border-red-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-[#E50914]" />
                </div>
                <h4 className="text-[19px] font-black text-gray-950 tracking-tight mb-3">
                  02 타이밍 읽는 능력
                </h4>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 font-light leading-[1.75] break-keep">
                  상대 여성이나 모임 구성원에게 내가 언제 말을 걸어야 하고, 어느 시점에서 대화 속도를 멈춰야 하며, 리얼 어떤 분기점에서 분위기를 기습 전환해야 하는지에 대한 원초적 박자감입니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-zinc-200/80 rounded-[2.2rem] p-8 shadow-md hover:shadow-xl hover:border-red-200/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-[#E50914]" />
                </div>
                <h4 className="text-[19px] font-black text-gray-950 tracking-tight mb-3">
                  03 자연스러운 '프레임'
                </h4>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 font-light leading-[1.75] break-keep">
                  억지로 위세를 떨치지 않고도, 상대방이 나를 마주할 때 묘하게 압도당하는 동시에 안도하며, 말이 어색하게 뚝뚝 끊기지 않고 뇌 활성화로 이어지게 되는 구조적 소통 가이드 설계법입니다.
                </p>
              </div>
            </div>
          </div>

          {/* C. The Ultimate Masterclass Pledge Banner */}
          <div className="bg-[#0B0A0A] text-gray-100 p-8 rounded-[2.5rem] border border-zinc-900 shadow-2xl relative overflow-hidden py-12 mt-8">
            {/* Ambient luxury focal point */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/10 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 text-center space-y-6">
              <span className="text-[#E50914] text-xs font-bold uppercase tracking-[0.25rem] font-mono block">
                Ultimate Goal
              </span>
              
              <h3 className="text-[23px] sm:text-[25px] font-black tracking-tight leading-tight text-white break-keep">
                “걸음마부터 다시 시킨다”
              </h3>

              <p className="text-[15px] text-zinc-400 leading-relaxed font-light break-keep">
                저는 애초에 수강생에게 이 극단적이고 치열한 기조를 마음에 장착하고 한분 한분 꼼꼼히 알려드릴 것입니다.
              </p>
              
              <div className="w-8 h-px bg-zinc-800 mx-auto"></div>
              
              <p className="text-[15.5px] text-zinc-300 font-light leading-[1.8] text-left break-keep">
                대화를 처음부터 다시 배운다는 작업은 단순히 입안에 넣어 줄 죽은 문장 몇 장을 강제로 암기하는 수준의 연극이 아닙니다.<br /><br />
                당신이라는 남성의 <strong className="text-white font-extrabold">전체 소셜 자아 대화의 미세한 '오감'</strong>을 아예 밑바닥부터 새로 탄탄히 구축해 나가는 길고 험난한 고강도 여정입니다.
              </p>

              <div className="bg-[#1A1112] border border-red-950/40 p-5 rounded-2xl mt-4">
                <p className="text-[15px] font-extrabold text-white leading-relaxed break-keep">
                  지금껏 공식 정답만 비참하게 구걸하다 실패했다면,<br />
                  이번만큼은 진짜 '원초적인 본질'을 제대로 배워야 합니다.
                </p>
                <p className="text-[16px] text-[#E50914] font-black mt-3 break-keep underline underline-offset-4 decoration-2">
                  우리의 관계가 위대하게 변하는 건,<br />
                  결국 대화의 온전한 오감이 바뀌는 찰나의 순간입니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
