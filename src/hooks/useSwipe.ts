import { useRef, useCallback } from 'react';

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseUp: (e: React.MouseEvent) => void;
}

export function useSwipe(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  minDistance = 60
): SwipeHandlers {
  const startX = useRef<number>(0);

  const handleStart = useCallback((x: number) => {
    startX.current = x;
  }, []);

  const handleEnd = useCallback((x: number) => {
    const diff = startX.current - x;
    if (Math.abs(diff) < minDistance) return;
    if (diff > 0) {
      onSwipeLeft?.();
    } else {
      onSwipeRight?.();
    }
  }, [onSwipeLeft, onSwipeRight, minDistance]);

  return {
    onTouchStart: (e) => handleStart(e.touches[0].clientX),
    onTouchEnd: (e) => handleEnd(e.changedTouches[0].clientX),
    onMouseDown: (e) => handleStart(e.clientX),
    onMouseUp: (e) => handleEnd(e.clientX),
  };
}
