import { useEffect } from "react";

/**
 * Function to close object visibiity when an element asides it is clicked upon
 * @param refObject is the name of the ref object
 * @param closeFuntion is the function for the state that ensures the element's visibility
 */
export default function useOuterClick(refObject, closeFuntion) {
  // useEffect hook to close an element when mouse is clicked outside the elements's area
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (refObject.current && !refObject.current.contains(event.target)) {
        closeFuntion(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [refObject]);
}
