import { useEffect, useRef } from "react";

export function useHorizontalScroll<T extends HTMLElement = HTMLElement>() {
    const elRef = useRef<T | null>(null);

    useEffect(() => {
        const el = elRef.current;

        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return; // Ignore vertical scrolling

                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + (e.deltaX || e.deltaY), // Handle both deltaX and deltaY for cross-browser compatibility
                    behavior: 'smooth',
                });
            };

            el.addEventListener('wheel', onWheel);

            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);

    return elRef;
}