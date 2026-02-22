import { useEffect, useMemo, useRef, useState } from "react";

const useSliderLogic = ({ items, visibleCount, itemWidth, gap }) => {
  const hasClones = items.length > visibleCount;
  const initialIndexRef = useRef();

  const slides = useMemo(() => {
    if (!hasClones) return items;
    return [
      ...items.slice(-visibleCount),
      ...items,
      ...items.slice(0, visibleCount),
    ];
  }, [items, visibleCount, hasClones]);

  const total = slides.length;
  const lastRealIndex = total - visibleCount;

  const [index, setIndex] = useState(initialIndexRef.current);
  const [noTransition, setNoTransition] = useState(true);

  const trackRef = useRef(null);

  useEffect(() => {
    initialIndexRef.current = items.length > visibleCount ? visibleCount : 0;
    setNoTransition(true);
    setIndex(initialIndexRef.current);
  }, [items.length, visibleCount]);

  useEffect(() => {
    if (!hasClones) return;

    const track = trackRef.current;
    if (!track) return;

    const handleEnd = () => {
      setNoTransition(true);

      if (index === lastRealIndex) {
        setIndex(initialIndexRef.current);
      } else if (index === 0) {
        setIndex(lastRealIndex - visibleCount);
      }
    };

    track.addEventListener("transitionend", handleEnd);
    return () => track.removeEventListener("transitionend", handleEnd);
  }, [index, lastRealIndex, visibleCount, hasClones]);

  const slideWidth = itemWidth + gap;

  const slidesStyles = {
    transform: `translateX(-${index * slideWidth}px)`,
    transition: noTransition ? "none" : "transform 0.8s ease",
    gap: `${gap}px`,
  };

  const goPrev = () => {
    setNoTransition(false);
    setIndex((i) => i - 1);
  };

  const goNext = () => {
    setNoTransition(false);
    setIndex((i) => i + 1);
  };

  return {
    slides,
    slidesStyles,
    trackRef,
    goPrev,
    goNext,
  };
};

export default useSliderLogic;
