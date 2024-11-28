import Bgtres from "./components/bgtres";
import Prcard from "./components/prcard";
import Aboutme from "./components/aboutme";
import { Technologies } from "./components/technologies";
import { Projects } from "./components/projects";
import { Education } from "./components/education";
import { ContactForm } from "./components/contactform";

export default function Home() {
  return (
    <>

      <div className="fixed inset-0 z-[-1]">
        <Bgtres />
      </div>

      <div className="mt-10 flex justify-center">
        <Prcard />
      </div>

      <div id="aboutme" className="flex justify-center scroll-mt-20">
        <Aboutme />
      </div>

      <div className="flex justify-center">
        <Technologies />
      </div>

      <div id="projects" className="flex justify-center scroll-mt-20">
        <Projects />
      </div>

      <div id="education" className="flex justify-center scroll-mt-20">
        <Education />
      </div>

      <div id="contact ">
        <ContactForm />
      </div>

      


    </>

  );
}
