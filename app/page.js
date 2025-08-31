import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Kompetens from "./components/Kompetens";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Kompetens />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
