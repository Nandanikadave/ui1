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
        <div className="flex flex-col space-y-2 items-start justify-center">
          <h1 className="text-gray-500 font-medium text-sm">
            Skills Required
          </h1>

          {detail.skillsRequired.map((skill) => (
              <div key={skill.Name} className="flex text-xs space-x-1 font-medium text-gray-700 justify-start items-center w-fit h-fit border-2 rounded-md">
                <img src={skill.icon} alt={skill.Name} height={10} width={15} />
                <h1>{skill.Name}</h1>
              </div>
            ))}
        </div>
   
        <div className="flex flex-col items-start">
        <h1 className="text-gray-500 font-medium text-sm">
            Preferred Language
          </h1>
          <h1 className="text-gray-700 font-bold text-sm">
            {detail.Lan}
          </h1>
        </div>

        <div className="flex flex-col items-start">
        <h1 className="text-gray-500 font-medium text-sm">
            Type
          </h1>
          <h1 className="text-gray-700 font-bold text-sm">
            {detail.type}
          </h1>
        </div>

        <div className="flex flex-col items-start">
        <h1 className="text-gray-500 font-medium text-sm">
            Years of Experience
          </h1>
          <h1 className="text-gray-700 font-bold text-sm">
            {detail.exp}
          </h1>
        </div>
        </div>

        <div className="flex flex-col space-y-2 w-full border-b-2 px-24 py-10">
        <h1 className="text-gray-500 font-medium text-sm"> About the job </h1>
        <ol className="list-decimal pl-4 flex flex-col justify-start items-start">
          {detail.jobDetails.description.map((description) => (
            <li className="text-gray-700 ">{description}</li>
          ))}
        </ol>

        <h1 className="text-gray-700 ">Benefits:</h1>
        <div>
          {detail.jobDetails.benefits.map((benefit) => (
            <ol className="text-gray-700 pl-10 relative flex items-center space-x-2">
              <li className=" list-disc text-gray-700">{benefit}</li>
            </ol>
          ))}
        </div>

        <h1 className="text-gray-700 ">Schedule:</h1>
        <div>
            <ol className="text-gray-700 pl-10 relative flex items-center space-x-2">
              <li className=" list-disc text-gray-700">{detail.jobDetails.schedule}</li>
            </ol>
        </div>

        <h1 className="text-gray-700 ">Supplement Pay Types:</h1>
        <div>
          {detail.jobDetails.PayTypes.map((payType) => (
            <div className="text-gray-700 pl-4 space-x-2 relative flex items-center space-x-2">
              <p className="w-[5px] h-[5px] rounded-full bg-gray-700" />
              <p>{payType}</p>
            </div>
          ))}
        </div>

        <h1 className="text-gray-700 ">Workplace: {detail.jobDetails.Location}</h1>
        
         
        </div>
       
      </>
      )
      )
    
     
    
  )
}

export default JobData