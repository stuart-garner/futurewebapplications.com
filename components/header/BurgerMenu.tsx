type PropTypes = {
  onToggle: () => void;
  menuOpen: boolean;
};

const BurgerMenu = ({ onToggle, menuOpen }: PropTypes) => {
  return (
    <div id="burgerMenu" className="z-10 lg:hidden ">
      <div id="menuToggle" className="hidden">
        Burger Menu
      </div>
      <div className="relative right-0 top-0 block select-none">
        <input
          type="checkbox"
          className="absolute left-[-5px] top-[-7px] z-20 block h-8 w-10 cursor-pointer opacity-0"
          aria-labelledby="menuToggle"
          onChange={onToggle}
        />
        <span
          className={`z-1 relative mb-2 block h-1 w-7 origin-right  transition-all duration-500 ${
            menuOpen &&
            "mb-0  w-9 translate-x-0 translate-y-[0px] rotate-[-45deg]"
          } bg-black`}
        ></span>
        <span
          className={`z-1 relative mb-2 block h-1 w-7 ${
            menuOpen && "mb-0 opacity-0"
          } bg-black`}
        ></span>
        <span
          className={`z-1 relative block h-1 w-7 origin-right  transition-all duration-500 ${
            menuOpen && " w-9 translate-y-[2px] rotate-45"
          } bg-black `}
        ></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
