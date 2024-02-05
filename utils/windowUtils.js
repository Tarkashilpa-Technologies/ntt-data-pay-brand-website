import { useState, useEffect } from "react";

function getWindowObjectFunc() {
  if (typeof window != "undefined") {
    return window;
  } else {
    return null;
  }
}

function getWindowDimensions() {
  if (typeof window != "undefined") {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    if (windowHeight && windowWidth) {
      return [windowHeight, windowWidth];
    } else {
      return [0, 0];
    }
  } else {
    return [0, 0];
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function getWindowObject() {
  const [windowObject, setWindowObject] = useState(getWindowObjectFunc());

  useEffect(() => {
    function handleWindowObjCreation() {
      setWindowObject(getWindowObjectFunc());
    }

    window.addEventListener("DOMContentLoaded", handleWindowObjCreation);
    return () =>
      window.removeEventListener("DOMContentLoaded", handleWindowObjCreation);
  }, []);

  return windowObject;
}
