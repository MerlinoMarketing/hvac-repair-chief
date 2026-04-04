'use client';

import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

export function BeforeAfterSlider({ before, after, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={`After - ${title}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-green-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`Before - ${title}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-slate-700" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-700" />
          </div>
        </div>
      </div>

      {/* Instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-slate-900 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        Drag to compare
      </div>
    </div>
  );
}
