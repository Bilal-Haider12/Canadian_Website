import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / 60;

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
}

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section className="py-20">

      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          About Canada Visa Experts
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          { end: 10, label: "Years" },
          { end: 5000, label: "Cases" },
          { end: 98, label: "Success %" },
          { end: 24, label: "Support" },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl text-center">
            <h3 className="text-4xl font-bold text-red-600">
              {inView ? <Counter end={item.end} /> : 0}
            </h3>
            <p>{item.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}