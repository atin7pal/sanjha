import React, { useState, useEffect } from "react";
import iconbg from "../../assets/Images/About/iconbg.png";

export const Counter = ({
  title,
  description,
  icon: Icon,
  number,
  classname,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const increment = number / 100; // Adjust speed by dividing number
          let currentNumber = 0;

          const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= number) {
              setCount(number);
              clearInterval(interval);
            } else {
              setCount(Math.ceil(currentNumber));
            }
          }, 10);

          return () => clearInterval(interval); // Cleanup on unmount
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${title}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [number, title]);

  return (
    <div
      id={`stat-${title}`}
      className={`flex flex-col items-center gap-2 p-6 ${classname}`}
    >
      <div
        className="w-20 h-20 flex justify-center items-center text-gray-900 text-4xl bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${iconbg})` }}
      >
        <Icon /> {/* Render the icon */}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-center max-sm:h-[50px]">{description}</p>
      <p className="text-4xl font-bold text-[#009688]">{count}</p>
    </div>
  );
};
