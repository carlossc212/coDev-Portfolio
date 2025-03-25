const NavListItem = ({ children, animDelay, navbarVisible }) => {
  return (
    <li
      className={`opacity-0 ${navbarVisible ? "animate-appear-right" : ""}`}
      style={{ animationDelay: `${animDelay}ms` }}
    >
      <a
        href="#"
        className="inline-block h-full w-full py-4 transition-colors hover:bg-neutral-900"
      >
        {children}
      </a>
    </li>
  );
};

export default NavListItem;
