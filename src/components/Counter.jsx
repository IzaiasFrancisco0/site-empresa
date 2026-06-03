import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

export default function Counter({ target }) {
  const [count, setCount] = useState(0);

  const [ref, inView] = useInView();

  const num = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;

    let start = 0;

    const step = Math.ceil(num / 60);

    const timer = setInterval(() => {
      start += step;

      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}