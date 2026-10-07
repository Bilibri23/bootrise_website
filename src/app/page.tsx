import { DemoCta } from "@/components/demo-cta";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Navbar } from "@/components/navbar";
import { Problem } from "@/components/problem";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { WhyBootRise } from "@/components/why-bootrise";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Journey />
        <DemoCta />
        <WhyBootRise />
        <VideoPlaceholder embedUrl={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
