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
      className={`fixed py-5 z-[9999] left-0 right-0  transition-all duration-500 flex items-stretch ${
        hide ? "-top-[150px]" : "top-0"
      }  ${shrunk ? "h-[75px] bg-white" : "h-[150px] bg-transparent"}`}
    >
      <div className="container flex justify-between h-auto">
        <div className="h-auto  w-[300px]">
          <Link href="/" scroll={false} aria-label="Link to home page">
            <img src="/logo.png" alt="Logo" className="w-auto h-[100%]" />
          </Link>
        </div>
        <nav role="navigation" className="flex gap-5 items-center">
          <Link
            className="button-secondary"
            href="/"
            aria-label="Link to home page"
          >
            Home
          </Link>

          <Link
            className="button-secondary"
            href="/blog"
            aria-label="Link to blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
