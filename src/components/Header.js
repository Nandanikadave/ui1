import React from "react";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  CreditCardIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../images/image.jpg";
import acc from "../images/atlassian.jpg";

const navbar = [
  { name: "Jobs", href: "#", current: true, icon: BriefcaseIcon },
  { name: "Messages", href: "#", current: false, icon: EnvelopeIcon },
  { name: "Payments", href: "#", current: false, icon: CreditCardIcon },
];

function Header() {
  return (
    <div className="w-full border-b-2 border-gray-300 py-7">
      <img className="position: absolute left-7 top-6 h-12 w-24" src={logo} />

      <div className="hidden sm:mb-8 sm:flex justify-center">
        <div className="flex flex-row space-x-7 ... top-6 absolute rounded-full px-7 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          {navbar.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`rounded-full px-7 py-2 text-sm font-medium flex items-center space-x-2 ${
                item.current
                  ? "bg-Orange text-white border-orangeBorder border-2"
                  : "text-gray-400 hover:bg-Orange hover:text-white hover:border-orangeBorder hover:border-2"
              }`}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <button className="absolute top-9 right-24 mr-5 mb-1 flex items-center space-x-6">
          <BellAlertIcon className=" h-6 w-6 text-black-500" />
        </button>
        <div className="absolute top-8 right-12">
          <div className=" flex inline-flex items-center right-2">
            <img className="h-8 w-8 rounded-full" src={acc} />
            <ChevronDownIcon
              aria-hidden="true"
              className="mr-1 h-5 w-5 text-black-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
