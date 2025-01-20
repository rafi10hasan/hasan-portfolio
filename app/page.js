import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Packages from "@/components/Home/Packages";
import Projects from "@/components/Home/Projects";
import ScrollToTopButton from "@/components/Home/ScrollToTop";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";


export default function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <Projects/>
        <Packages/>
        <Services/>
        <Skills/>
        <Contact/>
        <ScrollToTopButton/>
        <Footer/>
    </>
    
  );
}
