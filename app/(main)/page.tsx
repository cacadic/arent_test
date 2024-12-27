import SectionHero from "@/components/sections/sectionHero";
import SectionMealHistory from "@/components/sections/sectionMealHistory";
import SectionNavigationInput from "@/components/sections/sectionNavigationInput";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionNavigationInput />
      <SectionMealHistory />
    </>
  );
}
