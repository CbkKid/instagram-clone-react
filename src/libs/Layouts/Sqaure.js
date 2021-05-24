import React, { useRef } from "react";
import useComponentSize from "../Hooks/useComponentSize";

export default function Square({ children }) {
  const elementRef = useRef(null);
  const size = useComponentSize(elementRef);

  return (
    <div ref={elementRef} style={{ width: "100%", height: size.width }}>
      {children}
    </div>
  );
}
