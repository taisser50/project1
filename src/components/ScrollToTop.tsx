import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  smooth?: boolean;
}

export default function ScrollToTop({ smooth = false }: ScrollToTopProps) {
  const { pathname } = useLocation();
  const scrollPositions = useRef<{ [key: string]: number }>({}); // لتخزين Scroll لكل صفحة
  const previousPath = useRef<string>("");

 
  useEffect(() => {
    return () => {
      scrollPositions.current[previousPath.current] = window.scrollY;
    };
  }, []);

  useEffect(() => {
   
    const savedPosition = scrollPositions.current[pathname];

    window.scrollTo({
      top: savedPosition ?? 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });

    previousPath.current = pathname; 
  }, [pathname, smooth]);

  return null;
}
