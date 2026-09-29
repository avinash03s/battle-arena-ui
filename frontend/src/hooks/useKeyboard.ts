import {
  useCallback,
  useEffect,
  useRef,
} from "react";

export interface KeyboardState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

const createInitialState =
  (): KeyboardState => ({
    up: false,
    down: false,
    left: false,
    right: false,
  });

export function useKeyboard() {
  const keysRef = useRef<KeyboardState>(
    createInitialState()
  );

  const setKey = useCallback(
    (
      key: string,
      pressed: boolean
    ) => {
      switch (key.toLowerCase()) {
        case "w":
        case "arrowup":
          keysRef.current.up = pressed;
          break;

        case "s":
        case "arrowdown":
          keysRef.current.down = pressed;
          break;

        case "a":
        case "arrowleft":
          keysRef.current.left = pressed;
          break;

        case "d":
        case "arrowright":
          keysRef.current.right = pressed;
          break;

        default:
          break;
      }
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      setKey(event.key, true);
    };

    const handleKeyUp = (
      event: KeyboardEvent
    ) => {
      setKey(event.key, false);
    };

    const reset = () => {
      keysRef.current =
        createInitialState();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    window.addEventListener(
      "blur",
      reset
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );

      window.removeEventListener(
        "blur",
        reset
      );
    };
  }, [setKey]);

  return keysRef;
}