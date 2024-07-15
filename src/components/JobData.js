import {React, useState, useEffect} from 'react'
import {MapPinIcon, BanknotesIcon } from "@heroicons/react/24/outline";

function JobData() {
    const [jobData, setJobData] = useState([]);
    
    useEffect(() => {
        fetch('/Constant.json')
          .then((response) => response.json())
          .then((data) => setJobData(data));
      }, []);

  return (

    jobData.map((detail) => (

      <>
      <div className="w-full flex flex-col border-b-2 px-24 py-7 space-y-3 items-start justify-start">
        <div className="flex space-x-4 items-center">
        <p className="  text-3xl font-bold text-gray-700">{detail.post}</p>
        <div className="flex w-fit space-x-1 text-grayMedium items-center justify-start">
        <p className=" text-xs font-medium text-gray-400 ">{detail.time}</p>
        </div>
        </div>
        <div className="flex space-x-8 items-center text-grayDark text font-medium">
          <div className="flex w-fit space-x-1 items-center">
          <p className="text-lg inline-flex font-medium	text-gray-500">
            <MapPinIcon class="h-5 w-5 text-gray-500 mr-3 mt-1" />
          {detail.location}</p>
          </div>
          <div className="flex w-fit space-x-1 items-center">
          <p className="inline-flex text-lg  font-medium	text-gray-500">
            <BanknotesIcon class="h-5 w-5 text-gray-500 mr-3 mt-1" />
            {detail.earning}
            </p>
          </div>
        </div>
        </div>

        <div className="flex space-x-24 w-full border-b-2 px-24 py-7 ">

        </div>
      </>
      )
      )
    
     
    
  )
}

export default JobData