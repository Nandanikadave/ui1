import React from 'react'
import acc from "../images/atlassian.jpg"

function Company() {
  return (
    <div className="flex flex-col w-full space-y-5 py-7">
        <div className="flex space-x-2">
        <img className="h-8 w-8 rounded-full" src={acc} />
        </div>
    </div>
  )
}

export default Company