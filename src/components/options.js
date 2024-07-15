import React from "react";

const option = [
  { name: "Job Preview", href: "#", current: true },
  { name: "Application", href: "#", current: false },
  { name: "Match", href: "#", current: false },
  { name: "Messages", href: "#", current: false },
];

function Joboptions() {
  return (
    <div className="border-b-2 border-gray-200 py-5">
      <div className=" absolute -mt-4 left-16 hidden sm:mb-8 sm:flex ">
        {option.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={`px-7 py-2 text-sm font-medium flex items-center space-x-2 relative ${
              item.current
                ? "text-Orange after:bg-Orange after:scale-x-100"
                : "text-gray-400 hover:text-red-600 hover:text-white"
            } after:absolute after:bottom-0 after:left-10 after:h-0.5 after:w-14`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Joboptions;
