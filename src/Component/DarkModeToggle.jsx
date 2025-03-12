import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

  return (
    <div
      className={`flex items-center justify-center min-h-screen  ${
        darkMode ? "bg-black text-white" : " bg-white text-black"
      }`}
    >
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox"
          className="sr-only peer bg-green-500"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {/* <div className="w-14 h-7  peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur deleniti repellat alias nemo sequi provident! Quidem
            ipsum ea ab voluptatem, quae eveniet porro inventore optio alias,
            eaque consequuntur nisi aut accusantium, nostrum modi eos doloribus
            a libero eum! Perspiciatis rem sed molestias nobis consectetur
            adipisci temporibus accusamus, eos maxime quos?
          </p>
        </div> */}
      </label>
    </div>
  );
};

export default DarkModeToggle;
