
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";
import ScrollText from "./components/ScrollText";
import AboutMe from "./components/AboutMe";
import Social from "./components/Social";
import { Analytics } from "@vercel/analytics/react";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />
        <HeroSection />
      <section id="projects" >
        <ScrollText title='Projects' />
        <Projects />
      </section>
      <section id="skills" >
        <ScrollText title='Skills' />
        <Skills />
      </section>
      <section id="about" >
        <ScrollText title='About me' />
        <AboutMe />
      </section>
      <section id="contactme" >
        <ScrollText title='Contact me' />
        <ContactMe/>
      </section>
      <section id="socials" >
        <ScrollText title='Socials' />
        <Social />
      </section>
<Analytics/>
    </>
  );
}
