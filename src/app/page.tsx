import Bgtres from "./components/bgtres";
import { Navbar } from "./components/navbar";
import { Prcard } from "./components/prcard";

export default function Home() {
  return (
    <>

      <div className="fixed inset-0 z-[-1]">
        <Bgtres />
      </div>

      <Navbar />

      <Prcard />

    </>

  );
}
