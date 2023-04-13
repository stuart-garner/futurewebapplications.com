import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import useScrollPosition from "../../hooks/useScrollPosition";

const Header = () => {
  const direction = useScrollDirection();
  const [scrollY, setScrollY] = useState<number>(0);
  const [shrunk, setShrunk] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);

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

  return (
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
        <nav role="navigation" className="flex items-center gap-12">
          <Link
            className="button-secondary"
            href="/"
            aria-label="Link to home page"
          >
            Home
          </Link>

          <Link
            className="button-secondary"
            href="/about"
            aria-label="Link to About page"
          >
            About
          </Link>

          <Link
            className="button-secondary"
            href="/#footer"
            aria-label="Link to contact form"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
