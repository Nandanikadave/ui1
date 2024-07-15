import React from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  UsersIcon,
  UserPlusIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

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
            <span>Edit Job</span>
          </button>
        </div>
      </div>
      <div className="absolute right-36 top-48 items-center px-3">
  <div className="inline-flex relative border-b-2 px-2 py-6 h-full w-full items-center">
    <p className="flex items-center text-sm font-medium leading-6 text-gray-700">
      <UsersIcon className="h-5 w-5 mr-2" /> Applicant
    </p>
    <div className="flex-grow"></div> {/* Spacer div */}
    <p className="flex items-center text-sm leading-6 text-gray-900">400</p>
  </div>
</div>


    </div>
  );
}

export default PostData;
