import React from 'react'
import {TrashIcon, PencilSquareIcon,UsersIcon,UserPlusIcon,ChatBubbleLeftIcon,EyeIcon} from "@heroicons/react/24/outline";

function PostData() {
  return (
    <div className="flex flex-col">
    <div className=" absolute -right-1 w-72 h-full max-h-full border-l-2 border-gray-200 bg-white">
    <div className="flex flex-row space-x-12">
    <button className="text-sm leading-6 top-5 hover:text-white relative left-5 bg-orange-200 -ring-1 rounded-md h-8 w-28 ring-1 ring-orange-500 hover:bg-Orange text-Orange flex items-center justify-center space-x-2">
    <TrashIcon className="h-4 w-4 " />
    <span>Delete Job</span>
    </button>

    <button className="text-sm leading-6 top-5 hover:text-white relative bg-orange-200 -ring-1 rounded-md h-8 w-28 ring-1 ring-orange-500 hover:bg-Orange text-Orange flex items-center justify-center space-x-2">
    <PencilSquareIcon class="h-4 w-4" />
    <span>Edit Job</span></button>
    </div>

    <div className="pt-12 flex flex-col space-y-2 p-4">
    <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
    <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0 ">
      <dt className="flex items-center text-sm font-medium leading-6 text-gray-700">
        <UsersIcon className="h-5 w-5 mr-2" /> Applicant
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-32">400</dd>
    </div>
    </dl>
    </div>

    <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"> <UserPlusIcon className="h-5 w-5 mr-2" /> Matches</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-32">100</dd>
      </div>
    </dl>
    </div>

    <div className="w-full border-b-2 border-gray-100 h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"><ChatBubbleLeftIcon className="h-5 w-5 mr-2" />Messages</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0  sm:ml-32">147</dd>
      </div>
    </dl>
    </div>

    <div className="w-full h-12 flex items-center">
    <dl className="w-full divide-y divide-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:px-0">
        <dt className="flex items-center text-sm font-medium leading-6 text-gray-700"><EyeIcon className="h-5 w-5 mr-2" />Views</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0  sm:ml-32">800</dd>
      </div>
    </dl>
    </div>
  
    </div>
    </div>
    </div>
  )
}

export default PostData