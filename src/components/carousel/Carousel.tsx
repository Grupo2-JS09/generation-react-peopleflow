import { useState, useEffect } from "react";

interface Slide {
  image: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className='relative w-full h-64 sm:h-96 overflow-hidden rounded-2xl shadow-lg'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-sm sm:text-lg font-medium'>
            {slide.text}
          </div>
        </div>
      ))}

      {/* Botão anterior */}
      <button
        onClick={prevSlide}
        className='absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full'
      >
        ◀
      </button>

      {/* Botão próximo */}
      <button
        onClick={nextSlide}
        className='absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full'
      >
        ▶
      </button>
    </div>
  );
}
