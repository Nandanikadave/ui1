import React from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  UsersIcon,
  UserPlusIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  MapPinIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const PostData = () => {
  return (
    <>
      <div className="flex space-x-4 w-full">
        <button className="flex w-full justify-center h-fit space-x-2 rounded-lg items-center p-2 text-sm leading-6 hover:text-white  bg-orange-200 -ring-1 rounded-md ring-1 ring-orange-500 hover:bg-Orange text-Orange">
          <TrashIcon className="h-4 w-4 " />
          <span> Delete Job </span>
        </button>
        <button className="flex w-full justify-center h-fit space-x-2 rounded-lg items-center p-2 text-sm leading-6 hover:text-white  bg-orange-200 -ring-1 rounded-md ring-1 ring-orange-500 hover:bg-Orange text-Orange">
          <PencilSquareIcon class="h-4 w-4" />
          <span> Edit Job </span>
        </button>
      </div>
      <div className="flex flex-col items-center px-3 mt-5">
        <div className="flex border-b-2 px-2 py-4 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <UsersIcon className="h-5 w-5 mr-2 text-gray-500" />
            <h1 className="text-sm font-semibold text-gray-500">Applicants</h1>
          </div>
          <h1 className="text-m font-semibold text-gray-800">400</h1>
        </div>
        <div className="flex border-b-2 px-2 py-4 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <UserPlusIcon className="h-5 w-5 mr-2 text-gray-500" />
            <h1 className="text-sm font-semibold text-gray-500">Matches</h1>
          </div>
          <h1 className="text-m font-semibold text-gray-800">100</h1>
        </div>
        <div className="flex border-b-2 px-2 py-4 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <ChatBubbleLeftIcon className="h-5 w-5 mr-2 text-gray-500" />
            <h1 className="text-sm font-semibold text-gray-500">Messages</h1>
          </div>
          <h1 className="text-m font-semibold text-gray-800">147</h1>
        </div>
        <div className="flex px-2 py-4 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <EyeIcon className="h-5 w-5 mr-2 text-gray-500" />
            <h1 className="text-sm font-semibold text-gray-500">Views</h1>
          </div>
          <h1 className="text-m font-semibold text-gray-800">800</h1>
        </div>
      </div>
    </>
  );
};

export default PostData;
