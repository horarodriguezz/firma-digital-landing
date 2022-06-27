import { useState, useEffect } from "react";

export const useParentDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 48, height: 48 });

  useEffect(() => {
    setDimensions({
      width: ref.current.style.width,
      height: ref.current.style.height,
    });
  }, [ref]);

  return dimensions;
};
