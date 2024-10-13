
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";
import ScrollText from "./components/ScrollText";

export default function Home() {
  return (
    <>
    <Cursor/>
    <Header/>
    <HeroSection />
    <ScrollText title='Projects'/>
    <Projects/>
    </>
  );
}
