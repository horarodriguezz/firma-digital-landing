import { useWindowSize } from "./useWindowSize";
import { useState, useEffect } from "react";

export const useParentDimensions = (ref) => {
  const width = useWindowSize();
  const [dimensions, setDimensions] = useState({ width: 48, height: 48 });

  const updateDimensions = () => {
    return setDimensions({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions());

    return window.removeEventListener("resize", updateDimensions());
  }, [width]);

  useEffect(() => {
    updateDimensions();
  }, []);

  return dimensions;
};
