import { useEffect, useRef, useCallback } from "react";

export function useAutoplay({ autoplay = false, interval = 3000, onTick }) {
  const timerRef = useRef(null);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (!autoplay || interval <= 0) return;

    stop();
    timerRef.current = setInterval(() => {
      onTick?.();
    }, interval);
  }, [autoplay, interval, onTick, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { start, stop };
}
