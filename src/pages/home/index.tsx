import { useRef } from "react";
import { Navbar } from "components/navbar";
import { Header } from "components/header";
import { About } from "components/about";
import { Skills } from "components/skills";
import { Portfolio } from "components/portfolio";
import { Footer } from "components/footer";
import { ScrollTop } from "components/scroll-top";

export const Home = () => {
  const homeRef = useRef<null | HTMLInputElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const portfolioRef = useRef<null | HTMLDivElement>(null);

  const homeScroll = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const aboutScroll = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const skillScroll = () =>
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  const portfolioScroll = () =>
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Navbar
        home={homeScroll}
        about={aboutScroll}
        skill={skillScroll}
        portfolio={portfolioScroll}
      />
      <Header refProp={homeRef} about={aboutScroll} />
      <About refProp={aboutRef} skill={skillScroll} />
      <Skills refProp={skillRef} />
      <Portfolio refProp={portfolioRef} />

      <Footer />
      <ScrollTop />
    </div>
  );
};
