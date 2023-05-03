import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const direction = useScrollDirection();
  const [scrollY, setScrollY] = useState<number>(0);
  const [shrunk, setShrunk] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollY > 375 ? setShowScrollTop(true) : setShowScrollTop(false);
  }, [scrollY]);

  useEffect(() => {
    if (scrollY > 0 && !shrunk) {
      setShrunk(true);
    } else if (scrollY <= 0 && shrunk) {
      setShrunk(false);
    }
  }, [scrollY, shrunk]);

  useEffect(() => {
    if (scrollY > 250 && !hide && direction === "down") {
      setHide(true);
    } else if (hide && direction === "up") {
      setHide(false);
    }
  }, [scrollY, direction, hide]);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[9999] flex  items-stretch py-5 transition-all duration-500 ${
          hide ? "-top-[150px]" : "top-0"
        }  ${
          shrunk
            ? "h-[75px] bg-white drop-shadow-md"
            : "h-[150px] bg-transparent drop-shadow-none"
        }`}
      >
        <div className="container flex h-auto justify-between">
          <div className="h-auto  w-[300px]">
            <Link href="/" scroll={false} aria-label="Link to home page">
              <img src="/logo.png" alt="Logo" className="h-[100%] w-auto" />
            </Link>
          </div>
          <nav role="navigation" className="hidden items-center gap-12 lg:flex">
            <Link
              className="menuButton"
              href="/"
              aria-label="Link to home page"
            >
              Home
            </Link>

            <Link
              className="menuButton"
              href="/about"
              aria-label="Link to About page"
            >
              About
            </Link>

            <Link
              className="menuButton"
              href="/#footer"
              aria-label="Link to contact form"
            >
              Contact
            </Link>
          </nav>
          <BurgerMenu
            onToggle={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </div>
      </header>

      <div
        onClick={() => topFunction()}
        className={`fixed bottom-5 right-5 z-[9999] cursor-pointer rounded-xl bg-slate-900 p-6 text-white transition-all duration-300 ${
          showScrollTop ? "bottom-5" : "bottom-[-100px]"
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
      </div>
    </>
  );
};

export default Header;
