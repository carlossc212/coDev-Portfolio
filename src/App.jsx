import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <header className="text-white fixed top-0 left-0 right-0 h-[var(--navbar-height)] z-20">
        <Navbar />
      </header>
      <main className="bg-neutral-900 text-white h-full min-h-screen pt-[var(--navbar-height)]">
        <Hero />
      </main>
    </>
  );
}

export default App;
