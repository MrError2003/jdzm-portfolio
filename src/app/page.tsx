import Bgpattern from "./components/bgpattern";

export default function Home() {
  return (
    <>

      {/* Fondo de pantalla con patrón */}
      <div >
        <Bgpattern className="fixed inset-0 z-[-1]" />
      </div>

      {/* Contenido principal en el frente */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Welcome to your Tailwind CSS + Next.js app
        </h1>
      </div>

    </>

  );
}
