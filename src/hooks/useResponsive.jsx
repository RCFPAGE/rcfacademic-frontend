import { useEffect, useState } from "react";

export default function useResponsive() {
  function windowMatch() {
    if (window !== "undefined") {
      return window.matchMedia("(max-width: 1024px)").matches;
    }
  }
  const [onMobile, setOnMobile] = useState(windowMatch());
  useEffect(() => {
    // Set media query btw 0px and 1024px
    if (window !== "undefined") {
      window
        .matchMedia("(max-width: 1024px)")
        .addEventListener("change", (e) => {
          setOnMobile(e.matches);
        });
    }
  });
  // Return the state variable
  return onMobile;
}
