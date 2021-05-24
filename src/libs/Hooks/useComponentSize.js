import { useState, useEffect } from "react";

// Hook
export default function useComponentSize(ref) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [componentSize, setComponentSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // console.log(ref);
      const node = ref?.current;
      // Set window width/height to state
      if (node) {
        // console.log(node);
        setComponentSize({
          width: node.getBoundingClientRect().width,
          height: node.getBoundingClientRect().height
        });
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return componentSize;
}
