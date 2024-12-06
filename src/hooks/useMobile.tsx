import { useEffect, useLayoutEffect, useState } from "react";

const MAX_MOBILE_SIZE = 600;

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= MAX_MOBILE_SIZE);
    };
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= MAX_MOBILE_SIZE);
      window.addEventListener("resize", handleSize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleSize);
      }
    };
  }, []);
  return isMobile;
};
