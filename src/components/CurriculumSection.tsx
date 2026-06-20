import React from 'react';
import { FileImage, ChevronRight } from 'lucide-react';

// =========================================================
// 1. AN ELEGANT IMAGE FRAME PLACEHOLDER AS INSTRUCTED
// =========================================================
interface ImageFrameProps {
  fileName: string;
}

const ImageFrame = ({ fileName }: ImageFrameProps) => {
  return (
    <div className="relative w-full aspect-video sm:aspect-[1.8/1] bg-[#121212] border border-zinc-800 rounded-2xl flex flex-col items-center justify-center overflow-hidden my-4 sm:my-6 relative group select-none shadow-2xl">
      {/* Abstract dark cosmic lines to look like an authentic digital photography mockup */}
      <div className="absolute inset-0 bg-[#090909]" />
      <div 
        className="absolute inset-0 opacity-15" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(229, 9, 20, 0.15) 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-950/15 rounded-full blur-[80px]" />
      
      {/* High-end minimalist design frame */}
      <div className="relative z-10 flex flex-col items-center space-y-4 px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-[#E50914] shadow-xl group-hover:scale-105 transition-all duration-300">
          <FileImage className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <p className="text-zinc-200 font-extrabold text-[15px] sm:text-[16px] tracking-wide">{fileName}</p>
          <p className="text-[#E50914] text-[10px] font-mono font-bold tracking-widest uppercase bg-red-950/40 border border-red-900/30 px-3 py-1 rounded-full inline-block">
            Original Attachment Placeholder
          </p>
        </div>
      </div>
      
      {/* Tech Finder corners reproducing a screenshot device frame */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-zinc-700/80" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-zinc-700/80" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-zinc-700/80" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-700/80" />
      
      {/* Meta indicators */}
      <div className="absolute bottom-3 right-4 text-[9px] font-mono text-zinc-650 text-zinc-500 tracking-widest uppercase">
        ATTACHED_FILE_V1
      </div>
    </div>
  );
};

// =========================================================
// 2. CURRICULUM ITEM BLOCK REPRODUCING '커리큘럼 예시.jpg'
// =========================================================
interface CurriculumBlockProps {
  headerTitle: string;
  items: string[];
}

const CurriculumBlock = ({ headerTitle, items }: CurriculumBlockProps) => {
  return (
    <div className="w-full bg-[#18181A] border border-zinc-900 rounded-[18px] p-4 sm:p-5 shadow-2xl relative overflow-hidden flex flex-col">
      {/* Header bar reproducing '1교시' with the red & black tone and manner */}
      <div className="w-full bg-[#E50914] text-white font-black text-[15px] sm:text-[16px] py-3.5 px-4 rounded-[10px] text-center tracking-wide select-none mb-3 shadow-[0_4px_20px_rgba(229,9,20,0.25)]">
        {headerTitle}
      </div>

      {/* Rows stack replicating the image's row boxes */}
      <div className="space-y-2 flex-grow">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="w-full bg-[#2A2A2E] hover:bg-[#323238] border border-[#3A3A40] transition-colors duration-150 rounded-[10px] py-4 px-5 flex justify-between items-center text-left"
          >
            <span className="text-white text-[13.5px] sm:text-[14px] font-bold leading-relaxed pr-4 break-keep select-none">
              {item}
            </span>
            <span className="text-zinc-400 font-mono text-xs select-none flex-shrink-0 tracking-wider">
              {String(idx + 1).padStart(3, '0')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================
// 3. MAIN COMPONENT
// =========================================================
export function CurriculumSection() {
  const dailyTaskItems = [
    "욕망 일기",
    "나의 진짜 목표를 찾고 억압된 에너지를 개방시키는 매일의 훈련",
    "매일 스스로에게 묻습니다.",
    "나는 어떤 여자를 원하는가?",
    "나는 어떤 남자로 보이고 싶은가?",
    "나는 왜 결정적인 순간에 눈치를 보는가?",
    "오늘 하고 싶었지만 하지 못한 말은 무엇인가?",
    "욕망이 선명해져야 말도 선명해집니다.",
    "CNA는 말문을 여는 것보다 먼저, 당신 안에 막혀 있던 에너지를 여는 것부터 시작합니다."
  ];

  const otItems = [
    "왜 나는 여자 앞에서 원래 내 모습대로 말하지 못할까?",
    "개인별 화술, 비언어, 긴장 패턴 진단",
    "첫인상에서 무의식적으로 기억되는 말과 태도의 원리",
    "수강생별 매력 포인트 분석",
    "CNA 4주 성장 로드맵 정립",
    "수강생 간 라포 형성 및 실전 훈련 환경 조성"
  ];

  const week1Items = [
    "여자 앞에서 '항상 작아지는 나' 에서 '항상 당당한 나'로 거듭납니다",
    "솔직한 비전보드",
    "목표가 흐릿한 남자는 대화도 흐릿합니다",
    "겁쟁이를 움직이게 만드는 동기부여의 메커니즘",
    "비전보드를 통한 ‘미래의 나’ 설계",
    "현실적으로 작동하는 끌어당김의 원리",
    "내가 원하는 여자, 관계, 라이프스타일 구체화",
    "당위성 훈련",
    "“내가 왜 당당해야 하는지”를 무의식에 심는 훈련",
    "여자 앞에서 위축되는 남자의 심리 구조",
    "분위기를 장악하는 사람의 원리",
    "누구와도 자연스럽게 친해지는 인싸의 태도",
    "어디서든 당당한 사람처럼 말하고 행동하는 법",
    "장점 훔치기",
    "매력은 타고나는 게 아니라 훔쳐서 장착하는 것입니다",
    "내가 가져야 할 매력의 방향 찾기",
    "매력적인 사람의 말투, 태도, 분위기 분석",
    "가장 빠르고 효율적으로 매력을 흡수하는 법",
    "나만의 매력적인 페르소나 만들기"
  ];

  const week2Items = [
    "처음 만난 여자와도 어색함 없이 가까워지는 법을 배웁니다",
    "감정적 스몰토크",
    "대화 초반, 어색함을 깨는 첫 번째 구조",
    "할 말이 없어지는 진짜 이유",
    "대화를 자연스럽게 여는 감정적 스몰토크",
    "처음 만난 상대와 자연스럽게 친해지는 흐름",
    "누구든 1분 안에 편안함을 느끼게 만드는 대화법",
    "표현력 기르기",
    "머릿속에 그림이 그려지는 화술",
    "할 말이 없을 때 대화 소재를 만드는 '육감훈련'",
    "언변 좋은 사람들이 사용하는 언어회로",
    "상대가 내 말을 더 생생하게 느끼게 만드는 '은유적 표현'",
    "평범한 이야기도 매력적으로 들리게 만드는 표현법",
    "상대의 마음을 여는 질문법",
    "“이 사람, 나를 좀 아는 것 같은데?”라는 느낌 만들기",
    "상대의 성향을 읽는 콜드리딩",
    "핵심을 찌르는 질문법",
    "상대가 스스로 더 말하고 싶어지는 질문 구조",
    "공감과 호기심을 동시에 만드는 대화 확장법"
  ];

  const week3Items = [
    "관계 안에서 이루어지는 에너지의 흐름",
    "관계역학 형성",
    "왜 내 썸과 연애는 항상 힘들기만 할까?",
    "관계에서 주도권이 생기고 무너지는 원리",
    "여자 반응에 끌려가는 남자의 패턴",
    "여자가 따르고 싶은 남자의 태도",
    "상대의 자발적 투자를 이끌어내는 화술",
    "내 편 만들기",
    "사람은 말보다 분위기와 평판에 더 크게 움직입니다",
    "관계에서 주도권을 잃는 심리 구조",
    "신뢰를 만드는 사회적 증거의 원리",
    "상대가 나를 다르게 보게 만드는 주변 맥락 설계",
    "상대가 더 신경 쓰고 노력하게 만드는 감정 설계",
    "진정성 전달과 감정 증폭",
    "착한 말이 아니라 기억에 남는 말을 해야 합니다",
    "여자가 당신의 말을 믿지 않는 이유",
    "진정성을 인위적이지 않게 전달하는 법",
    "감정의 롤러코스터를 만드는 화술",
    "여자의 무의식에 강한 인상을 남기는 스토리텔링 기법"
  ];

  const week4Items = [
    "좋은 분위기를 실제 관계, 다음 진도로 연결하는 과정",
    "거절감 없는 제안",
    "도박식 리드는 그만. 받아들여지는 제안에는 구조가 있습니다",
    "거절당하기 쉬운 제안과 받아들여지는 제안의 차이",
    "사람이 순간적으로 마음을 결정하는 원리",
    "정확한 타이밍에 자연스럽게 리드하는 법",
    "“알잘딱깔센”한 남자의 제안 방식",
    "거절 다루기",
    "거절은 끝이 아니라 제안을 재설계할 수 있는 기회입니다",
    "당신이 반복적으로 거절당하는 이유",
    "거절의 심리적 메커니즘",
    "거절을 기회로 바꾸는 리프레이밍",
    "분위기를 망치지 않고 다시 흐름을 만드는 법",
    "선택 후 불안 줄이기",
    "여자가 선택한 뒤에도 계속 끌리게 만드는 마무리 기술",
    "관계 초반 본능을 계속 자극하는 앵커링 기법",
    "자연스럽게 방어기제를 해소하는 방법",
    "기대감을 증폭시키는 미정 화법",
    "다음 만남이 자연스럽게 이어지게 만드는 마무리 설계"
  ];

  const outcomesItems = [
    "여자 앞에서 위축되지 않는 자기 확신",
    "처음 만난 상대와도 자연스럽게 가까워지는 라포 능력",
    "어색한 상황에서 흥미로운 대화를 이어가는 표현력",
    "상대의 마음을 읽고 깊게 들어가는 질문력",
    "나만 노력하는 관계에서 벗어나는 관계역학 감각",
    "좋은 분위기를 실제 만남과 관계로 연결하는 클로징 능력",
    "CNA는 말 잘하는 사람을 만드는 강의가 아닙니다.",
    "여자 앞에서 당신의 매력이 제대로 전달되는 사람으로 바꾸는 강의입니다."
  ];

  const reviewItems = [
    "복습과 미참석자 분들을 위해 녹음본을 제공합니다."
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] text-gray-100 border-t border-zinc-900 relative overflow-hidden select-none">
      {/* Pure aesthetic radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#E50914]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-sm sm:max-w-md mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Core Title */}
        <div className="text-center space-y-4">
          <span className="bg-zinc-950 border border-zinc-900 text-zinc-400 font-extrabold text-[12px] uppercase tracking-widest px-5 py-2.5 rounded-full inline-block font-mono shadow-md">
            # CNA 커리큘럼
          </span>
          <h2 className="text-[25px] sm:text-[28px] font-black text-white whitespace-pre-line leading-tight tracking-tight pt-1 break-keep">
            다각도로 살펴보는<br />
            기본 원리와 구조
          </h2>
          <p className="text-zinc-400 text-[13.5px] font-light leading-relaxed break-keep max-w-[285px] mx-auto">
            매주 2시간이 넘는 미친강의<br />
            듣고나면 궁금한 게 쏟아질 수 밖에 없어요.<br />
            모든 질문에 시원하게 답해드립니다.
          </p>
        </div>

        {/* ----------------- STACKS FLOW ----------------- */}
        <div className="space-y-14 sm:space-y-16">

          {/* Section 1 */}
          <div className="space-y-2">
            <ImageFrame fileName="과제.png" />
            <CurriculumBlock headerTitle="Daily 과제" items={dailyTaskItems} />
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <ImageFrame fileName="공지.png" />
            <CurriculumBlock headerTitle="OT : 개인별 진단 및 로드맵 정립" items={otItems} />
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <ImageFrame fileName="1주차.png" />
            <CurriculumBlock headerTitle="1주차 : 메타인지 & 자신감 훈련" items={week1Items} />
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <ImageFrame fileName="2주차.png" />
            <CurriculumBlock headerTitle="2주차 : 라포의 기술" items={week2Items} />
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <ImageFrame fileName="3주차.png" />
            <CurriculumBlock headerTitle="3주차 : 관계역학의 기술" items={week3Items} />
          </div>

          {/* Section 6 */}
          <div className="space-y-2">
            <ImageFrame fileName="4주차.png" />
            <CurriculumBlock headerTitle="4주차 : 클로징 기술" items={week4Items} />
          </div>

          {/* Section 7 - CNA를 통해 얻게 되는 것 (No PNG requested in original format, placed between Week 4 and Review) */}
          <div className="space-y-2">
            <CurriculumBlock headerTitle="CNA를 통해 얻게 되는 것" items={outcomesItems} />
          </div>

          {/* Section 8 */}
          <div className="space-y-2">
            <ImageFrame fileName="복습+녹음본.png" />
            <CurriculumBlock headerTitle="복습+녹음본" items={reviewItems} />
          </div>

        </div>

      </div>
    </section>
  );
}
