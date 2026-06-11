import { HeroSection } from './components/HeroSection';
import { WarningSection } from './components/WarningSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { MissionsSection } from './components/MissionsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { PromisesSection } from './components/PromisesSection';
import { CurriculumSection } from './components/CurriculumSection';
import { StorySection } from './components/StorySection';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-[#E50914] selection:text-white font-sans text-gray-200">
      <HeroSection />
      <WarningSection />
      <ProblemSolutionSection />
      <MissionsSection />
      <StorySection />
      <BenefitsSection />
      <PromisesSection />
      <CurriculumSection />
      <TestimonialsSection />
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-600 bg-black">
        <p>© {new Date().getFullYear()} Communication DNA. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

