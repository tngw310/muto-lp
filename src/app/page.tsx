import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import MessageSection from "@/components/MessageSection";
import PolicySection from "@/components/PolicySection";
import ProfileSection from "@/components/ProfileSection";
import SupportSection from "@/components/SupportSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <MessageSection />
        <PolicySection />
        <ProfileSection />
        <SupportSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
