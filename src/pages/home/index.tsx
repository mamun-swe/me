import { Navbar } from "components/navbar";
import { Header } from "components/header";
import { About } from "components/about";
import { Skills } from "components/skills";
import { Portfolio } from "components/portfolio";
import { Footer } from "components/footer";
import { ScrollTop } from "components/scroll-top";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />

      <Footer />
      <ScrollTop />
    </div>
  );
};
