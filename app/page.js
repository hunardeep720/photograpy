import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Hero heading='Capturing Photography' message='I capture moments in nature and keep them alive' />
      <Slider />
      <Instagram />
    </main>
  );
}
