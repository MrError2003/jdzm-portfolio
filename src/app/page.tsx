import Bgtres from "./components/bgtres";
import { Navbar } from "./components/navbar";
import Prcard from "./components/prcard";
import Aboutme from "./components/aboutme";
import { Technologies } from "./components/technologies";

export default function Home() {
  return (
    <>

      <div className="fixed inset-0 z-[-1]">
        <Bgtres />
      </div>

      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <div className="mt-28 flex justify-center">
        <Prcard />
      </div>

      <div className="flex justify-center">
        <Aboutme />
      </div>

      <div className="flex justify-center">
        <Technologies />
      </div>





    </>

  );
}
