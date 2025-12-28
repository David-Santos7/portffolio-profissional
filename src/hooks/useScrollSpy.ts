import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}
