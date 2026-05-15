import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { GalleryItem } from '@/data/projects';
import './ProjectCarousel.css';

export default function ProjectCarousel({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    setIndex(0);
  }, [items]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  if (items.length === 0) {
    return null;
  }

  const showNav = items.length >= 2;

  return (
    <div className='projectCarousel'>
      <div className='projectCarousel__stack'>
        <div className='projectCarousel__viewport' ref={containerRef}>
          <motion.div className='projectCarousel__track' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='projectCarousel__slide'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='projectCarousel__image'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {showNav && (
            <>
              <motion.button
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                className={[
                  'projectCarousel__navButton',
                  'projectCarousel__navButton--prev',
                  index === 0
                    ? 'projectCarousel__navButton--disabled'
                    : 'projectCarousel__navButton--enabled',
                ].join(' ')}
              >
                <svg
                  className='projectCarousel__navIcon'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </motion.button>

              <motion.button
                disabled={index === items.length - 1}
                onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
                className={[
                  'projectCarousel__navButton',
                  'projectCarousel__navButton--next',
                  index === items.length - 1
                    ? 'projectCarousel__navButton--disabled'
                    : 'projectCarousel__navButton--enabled',
                ].join(' ')}
              >
                <svg
                  className='projectCarousel__navIcon'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </motion.button>

              <div className='projectCarousel__progress'>
                {items.map((_, i) => (
                  <button
                    key={items[i]?.id ?? items[i]?.url ?? `dot-${i}`}
                    onClick={() => setIndex(i)}
                    className={[
                      'projectCarousel__dot',
                      i === index ? 'projectCarousel__dot--active' : 'projectCarousel__dot--inactive',
                    ].join(' ')}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
