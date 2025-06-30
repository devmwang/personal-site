import { useEffect, useState, RefObject } from "react";

export default function useInView(
    ref: RefObject<Element>,
    options: IntersectionObserverInit = {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.1,
    },
): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, options]);

    return isIntersecting;
}
