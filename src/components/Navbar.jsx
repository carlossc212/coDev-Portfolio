import { useState } from "react";
import Toggler from "./Toggler";
import NavListItem from "./NavListItem";

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
        <ul className="flex flex-col text-2xl text-center py-8">
          <NavListItem navbarVisible={visible} animDelay={0}>
            Inicio
          </NavListItem>
          <NavListItem navbarVisible={visible} animDelay={150}>
            Sobre mi
          </NavListItem>
          <NavListItem navbarVisible={visible} animDelay={300}>
            Experiencia
          </NavListItem>
          <NavListItem navbarVisible={visible} animDelay={450}>
            Proyectos
          </NavListItem>
          <NavListItem navbarVisible={visible} animDelay={600}>
            Contacto
          </NavListItem>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
