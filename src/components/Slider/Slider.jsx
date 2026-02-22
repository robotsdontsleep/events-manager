'use client';

import { useAutoplay } from './useAutoPlay';
import useSliderLogic from './useSliderLogic';
import styles from './Slider.module.css';

export default function Slider({
  items = [],
  slideItem: Slide,
  itemWidth,
  gap,
  visibleCount,
  autoplay,
}) {
  const { slides, slidesStyles, trackRef, goPrev, goNext } = useSliderLogic({
    items,
    visibleCount,
    itemWidth,
    gap,
  });
  const viewPortWidth = (itemWidth + gap) * visibleCount - gap;

  const { start, stop } = useAutoplay({
    autoplay,
    onTick: goNext,
  });

  return (
    <div className={styles.slider} onMouseEnter={stop} onMouseLeave={start}>
      <div
        className={styles.viewport}
        style={{
          width: viewPortWidth,
        }}
      >
        <div className={styles.slides} ref={trackRef} style={slidesStyles}>
          {slides.map(item => (
            <div
              key={crypto.randomUUID()}
              className={styles.slide}
              style={{ width: `${itemWidth}px` }}
            >
              <Slide {...item} />
            </div>
          ))}
        </div>
      </div>
      {items.length > visibleCount && (
        <div className={styles['button-menu']}>
          <button onClick={goPrev}></button>
          <button onClick={goNext}></button>
        </div>
      )}
    </div>
  );
}
