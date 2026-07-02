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

function AboutSection() {
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

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
          We help students, skilled workers, and families from Pakistan achieve
          their dream of studying, working, and settling in Canada through
          professional immigration guidance.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {[
          { end: 10, label: "Years Experience" },
          { end: 5000, label: "Successful Cases" },
          { end: 98, label: "Visa Success %" },
          { end: 24, label: "Support" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-red-600">
              {inView ? <Counter end={item.end} /> : 0}
              {item.label === "Support" ? "/7" : "+"}
            </h3>

            <p className="mt-3 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default AboutSection;