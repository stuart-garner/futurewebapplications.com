import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.pageYOffset);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollY]);

  return scrollY;
};

export default useScrollPosition;
