import React from 'react';

interface CurriculumSubSection {
  title?: string;
  bullets: string[];
}

interface CurriculumItem {
  phase: string;
  subtitle: string;
  cover: React.ReactNode;
  sections: CurriculumSubSection[];
}

const curriculumData: CurriculumItem[] = [
  {
    phase: "DAILY TASK",
    subtitle: "Daily 과제 :",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <svg className="w-12 h-12 text-zinc-500 stroke-[1.25] z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 6h4" stroke="#E50914" strokeWidth="1.5" />
          <path d="M9 10h7" />
          <path d="M9 14h7" />
        </svg>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>DAILY_TASK</span>
          <span className="text-[#E50914]/60 font-bold">DESIRE_DIARY</span>
        </div>
      </div>
    ),
    sections: [
      {
        bullets: [
          "나의 진짜 목표를 찾고 억압된 에너지를 개방시키는 : ‘욕망 일기’"
        ]
      }
    ]
  },
  {
    phase: "ORIENTATION",
    subtitle: "<OT : 개인별 진단 및 로드맵 정립>",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <div className="absolute w-36 h-36 rounded-full border border-[#E50914]/10 flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 rounded-full border border-[#E50914]/15 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-[#E50914]/30 flex items-center justify-center">
               <div className="w-4 h-4 rounded-full bg-[#E50914]/80" />
            </div>
          </div>
        </div>
        <div className="relative text-center z-10">
          <span className="text-white text-[13px] font-black tracking-[0.25em] uppercase block mb-1 font-mono">OT</span>
          <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest font-bold">Roadmap & Diagnostic</span>
        </div>
      </div>
    ),
    sections: [
      {
        bullets: [
          "개인별 화술, 비언어 진단 및 피드백",
          "짧은 순간에 무의식에 저장되는 화술의 원리",
          "수강생간 라포 형성 및 CNA 로드맵 정립"
        ]
      }
    ]
  },
  {
    phase: "WEEK 01",
    subtitle: "<1주차 : 화술의 기반 '메타인지 & 자신감 훈련'>",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
        <svg className="w-14 h-14 text-zinc-500/80 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" stroke="#E50914" strokeWidth="1.5" className="animate-pulse" />
          <path d="M12 22V12" />
        </svg>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>SYSTEM_BUILD v1.0</span>
          <span className="text-[#E50914]/60 font-bold">01_BLUEPRINT</span>
        </div>
      </div>
    ),
    sections: [
      {
        title: "<미션과 비전>",
        bullets: [
          "겁쟁이를 용자로 만들어주는 동기부여의 매커니즘",
          "비전보드를 통한 ‘미래의 나’ 설계",
          "현실적이고 효과있는 끌어당김 법칙"
        ]
      },
      {
        title: "<자신감 & 자존감 훈련>",
        bullets: [
          "본질적인 매력의 원리",
          "누구나 친해지는 ‘인싸’ 되는법",
          "어디서든 당당한 사람이 되는법"
        ]
      },
      {
        title: "<매력 계발 훈련>",
        bullets: [
          "내가 가져야할 매력 찾기",
          "가장 빠르고 효율적으로 매력을 갖는 방법",
          "매력적인 사람이 갖고 있는 마인드셋"
        ]
      }
    ]
  },
  {
    phase: "WEEK 02",
    subtitle: "<2주차 : 빠르게 상대 마음을 여는 '라포의 기술'>",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-x-4 flex items-center justify-center space-x-1.5">
          <div className="w-1 h-8 bg-zinc-800 rounded-full" />
          <div className="w-1 h-12 bg-zinc-700 rounded-full" />
          <div className="w-1 h-18 bg-zinc-600 rounded-full" />
          <div className="w-1 h-24 bg-[#E50914] rounded-full animate-pulse" />
          <div className="w-1 h-14 bg-zinc-650 bg-zinc-600 rounded-full" />
          <div className="w-1 h-20 bg-zinc-700 rounded-full" />
          <div className="w-1 h-9 bg-zinc-800 rounded-full" />
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>FREQ_HZ 98.2</span>
          <span className="text-[#E50914]/60 font-bold">02_RESONANCE</span>
        </div>
      </div>
    ),
    sections: [
      {
        title: "라포의 기술",
        bullets: [
          "초반의 어색함을 깨는 대화 : 감정적 스몰토크의 구조",
          "상대 마음의 문을 여는 대화 : 진정한 공감",
          "누구든 1분만에 친해지는 대화 고수의 비결"
        ]
      },
      {
        title: "표현력 기르기",
        bullets: [
          "할말이 없다? 표현 능력을 비약적으로 상승시키는 ㅇㄱㅎㄹ 훈련법",
          "언변의 달인들은 이걸 합니다 : ㅇㄱㅍㅎ",
          "상대 머리속에 그림을 그려주는 화술 : ㅇㅇㅈㅍㅎ"
        ]
      },
      {
        title: "상대의 마음을 여는 법",
        bullets: [
          "이사람…어떻게 알았지? ㅋㄷㄹㄷ",
          "상대의 마음을 알아채는 핵심을 꽂는 질문법",
          "더 말하고 싶게 만드는 질문법"
        ]
      }
    ]
  },
  {
    phase: "WEEK 03",
    subtitle: "3주차 : 상대가 노력하게 만드는 '역학의 기술'",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <svg className="w-12 h-12 text-zinc-500 stroke-[1.25] z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#E50914" strokeWidth="1.5" />
        </svg>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>CTRL_VALVE_STABLE</span>
          <span className="text-[#E50914]/60 font-bold">03_DYNAMICS</span>
        </div>
      </div>
    ),
    sections: [
      {
        title: "역학형성",
        bullets: [
          "왜 나의 썸,연애는 힘들기만 할까 : 역학의 원리",
          "여자가 따르고 싶은 남자가 되는 법 : 주도권 가져오기",
          "여자가 노력하게 만드는 화술"
        ]
      },
      {
        title: "내편 만들기",
        bullets: [
          "당신이 당하고 있는 가스라이팅의 원리",
          "여자를 다루는 강력한 무기 : ㅅㅎㅈㅍㅍ",
          "상대를 안달나게 만드는 방법"
        ]
      },
      {
        title: "진정성 전달과 감정 증폭",
        bullets: [
          "여자가 당신의 말을 믿지않는 이유",
          "감정의 롤러코스터를 태우는 화술",
          "여자의 무의식에 강한 인상을 남기는 ‘스토리텔링’ 기법"
        ]
      }
    ]
  },
  {
    phase: "WEEK 04",
    subtitle: "4주차 : 거절할 수 없는 제안 '클로징 기술'",
    cover: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-900 rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />
        <div className="w-14 h-18 border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center relative p-1">
          <div className="absolute inset-0 bg-zinc-900/30 rounded-xl" />
          <span className="text-[9px] uppercase tracking-widest font-mono text-[#E50914] font-black z-10 animate-pulse">WANTED</span>
          <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center mt-1.5 z-10 bg-zinc-950 text-zinc-500">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-[9px] font-mono text-zinc-500">
          <span>CLOSING_TARGET</span>
          <span className="text-[#E50914]/60 font-bold">04_CONVERSION</span>
        </div>
      </div>
    ),
    sections: [
      {
        title: "<클로징을 앞당기는 요소>",
        bullets: [
          "도박식 제안은 그만! 거절 할 수 없는 제안 하는법",
          "무의식중에 당하는 충동구매의 원리",
          "\"알잘딱깔센\" 정확한 타이밍에 리드하는 남자"
        ]
      },
      {
        title: "<거절다루기>",
        bullets: [
          "당신이 늘 거절당하는 이유 : 거절의 매커니즘",
          "거절을 오히려 기회로 만드는 방법",
          "일류 세일즈맨들의 기술 : ㄹㅍㄹㅇㅁ"
        ]
      },
      {
        title: "<구매자의 후회 예방법>",
        bullets: [
          "지속적으로 본능 자극하는 ㅇㅋㄹ 기법",
          "자연스럽게 방어기제를 해소하는 방법",
          "기대감을 증폭시키는 ㅁㅈ화법"
        ]
      }
    ]
  }
];

export function CurriculumSection() {
  return (
    <section className="py-28 px-6 bg-[#050505] text-gray-100 border-t border-zinc-900/60 relative overflow-hidden select-none">
      {/* Soft atmospheric gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container max-w-sm mx-auto space-y-16 relative z-10">
        
        {/* Header with spacious layouts */}
        <div className="text-center space-y-6">
          <span className="bg-zinc-950 border border-zinc-900 text-zinc-400 font-extrabold text-[12px] uppercase tracking-widest px-5 py-2.5 rounded-full inline-block font-mono">
            # CNA 커리큘럼
          </span>
          <h2 className="text-[25px] sm:text-[27px] font-black text-white whitespace-pre-line leading-tight tracking-tight pt-2 break-keep">
            다각도로 살펴보는<br />
            기본 원리와 구조
          </h2>
          <p className="text-zinc-400 text-[14px] font-light leading-relaxed break-keep max-w-[280px] mx-auto">
            매주 2시간이 넘는 미친강의<br />
            듣고나면 궁금한 게 쏟아질 수 밖에 없어요.<br />
            모든 질문에 시원하게 답해드립니다.
          </p>
        </div>

        {/* 6-Week/Sesssion Stack */}
        <div className="space-y-10 pt-4">
          {curriculumData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0C0B0B] border border-zinc-900 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl relative transition-all duration-350 hover:border-[#E50914]/20 group"
            >
              {/* Highlight Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#E50914]/10 transition-all duration-300"></div>

              {/* Cover Illustration */}
              <div className="h-44 p-3 pb-0 relative">
                {item.cover}
              </div>

              {/* Card Contents */}
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#E50914] font-black font-mono text-[10px] uppercase tracking-widest bg-red-950/20 border border-red-900/30 px-3.5 py-1 rounded-full">
                    {item.phase}
                  </span>
                  <span className="text-zinc-550 text-zinc-500 font-mono text-[8px] uppercase tracking-widest font-bold">
                    CNA PROGRAM
                  </span>
                </div>

                <div className="space-y-1.5 mb-6">
                  <h4 className="text-zinc-300 text-[14px] font-extrabold leading-snug break-keep">
                    {item.subtitle}
                  </h4>
                </div>

                {/* Subsections & Bullets */}
                <div className="space-y-6 pt-5 border-t border-zinc-900/80">
                  {item.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-3.5">
                      {section.title && (
                        <h5 className="text-[#E50914] font-extrabold text-[13.5px] tracking-tight flex items-center break-keep">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mr-2 flex-shrink-0"></span>
                          {section.title}
                        </h5>
                      )}
                      
                      <ul className="space-y-2.5 pl-3.5 border-l border-zinc-900">
                        {section.bullets.map((bullet, bIdx) => (
                          <li 
                            key={bIdx} 
                            className="text-zinc-300 text-[13px] font-light leading-relaxed break-keep hover:text-white transition-colors duration-150"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
