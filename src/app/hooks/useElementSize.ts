'use client';
import { useEffect, useRef, useState } from 'react';
interface Size {
  width: number;
  height: number;
}

const useElementSize = () => {
  // Get the height of the navigation ----
  const elementRef = useRef<HTMLElement | null>(null); // Create a ref for the element
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const updateSize = () => {
    if (elementRef.current) {
      const { clientWidth, clientHeight } = elementRef.current;
      setSize({
        width: clientWidth,
        height: clientHeight
      });
    }
  };

  useEffect(() => {
    updateSize(); // initial size calculation
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return {
    elementRef,
    size
  };
};

export default useElementSize;
