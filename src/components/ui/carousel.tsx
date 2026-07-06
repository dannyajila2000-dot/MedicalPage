import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    function updateItemsPerView() {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    }

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  return itemsPerView;
}

export function Carousel<T>({
  items,
  renderItem,
  getKey,
  autoPlay = false,
  autoPlayInterval = 6000,
  className,
}: CarouselProps<T>) {
  const itemsPerView = useItemsPerView();
  const total = items.length;
  const canLoop = total > itemsPerView;

  const slides = useMemo(() => {
    if (!canLoop) return items;
    return [
      ...items.slice(-itemsPerView),
      ...items,
      ...items.slice(0, itemsPerView),
    ];
  }, [items, itemsPerView, canLoop]);

  const [index, setIndex] = useState(canLoop ? itemsPerView : 0);
  const [withTransition, setWithTransition] = useState(true);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    setWithTransition(false);
    setIndex(canLoop ? itemsPerView : 0);
  }, [itemsPerView, canLoop]);

  const goTo = useCallback((next: number) => {
    setWithTransition(true);
    setIndex(next);
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (!autoPlay || !canLoop) return;
    const id = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, canLoop, goNext]);

  function handleTransitionEnd() {
    if (!canLoop) return;
    if (index >= total + itemsPerView) {
      setWithTransition(false);
      setIndex(index - total);
    } else if (index < itemsPerView) {
      setWithTransition(false);
      setIndex(index + total);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
  }

  function handleTouchEnd() {
    if (touchDeltaX.current < -50) goNext();
    else if (touchDeltaX.current > 50) goPrev();
    touchDeltaX.current = 0;
  }

  const activeDot = canLoop
    ? ((index - itemsPerView) % total + total) % total
    : index;

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
    >
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className={cn(
              "flex",
              withTransition && "transition-transform duration-500 ease-out",
            )}
            style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((item, i) => (
              <div
                key={getKey ? getKey(item, i) : i}
                className="shrink-0 px-3"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        </div>

        {canLoop && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-700 shadow-md transition-colors hover:bg-primary-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-700 shadow-md transition-colors hover:bg-primary-50"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {canLoop && (
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => goTo(i + itemsPerView)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === activeDot ? "w-6 bg-primary-600" : "w-2 bg-slate-300",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
