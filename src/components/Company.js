import { React, useState, useEffect } from "react";
import acc from "../images/atlassian.jpg";

function Company() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch("/Constant.json")
      .then((response) => response.json())
      .then((data) => setJobData(data));
  }, []);

  return jobData.map((detail) => (
    <>
      <div className="inline-flex space-x-2 ml-20 ">
        <img className="h-14 w-14 rounded-full mr-3 mt-3" src={acc} />
        <h1 className="text-medium text-gray-700 mt-6 font-bold ">Atlassian</h1>
      </div>

      {/* <div className="flex space-x-44 w-full px-24 py-7 "> */}
      <div className="flex space-x-44 w-full px-24 py-1 mt-1 ">
        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-sm">Company Size</h1>
          <h1 className="text-gray-700  text-sm">{detail.Csize}</h1>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-base">Type</h1>
          <h1 className="text-gray-700 text-sm">{detail.Ctype}</h1>
        </div>
      </div>

      <div className="flex space-x-12 w-full px-24 py-1 mt-1 ">
        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-base">Sector</h1>
          <h1 className="text-gray-700 text-sm">{detail.sec}</h1>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-base">Funding</h1>
          <h1 className="text-gray-700 text-sm">{detail.Fund}</h1>
        </div>
      </div>

      <div className="flex space-x-48 w-full px-24 py-1">
        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-base">Founded in</h1>
          <h1 className="text-gray-700 text-sm">{detail.Found}</h1>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 font-medium text-base">Founded by</h1>
          <h1 className="text-gray-700 text-sm">{detail.FoundBy}</h1>
        </div>
      </div>
    </>
  ));
}

export default Company;
