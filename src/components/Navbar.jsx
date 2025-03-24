import { useState } from "react";
import Toggler from "./Toggler";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav className="bg-neutral-800 h-full max-h-24 flex flex-row justify-center px-8 relative z-20">
        <Toggler value={visible} onClick={() => setVisible(!visible)} />
      </nav>
      <div
        className={`bg-neutral-800 fixed top-0 right-0 h-full w-2xs max-w-screen transition-transform ease duration-150 pt-[var(--navbar-height)] ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col">
          <li className="inline-block animate-slide-in">Inicio</li>
          <li>Sobre mi</li>
          <li>Experiencia</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
