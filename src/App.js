import React from "react";
import Header from "./components/Header";
import Joboptions from "./components/options";
import PostData from "./components/sidebar";
import JobData from "./components/JobData";
import Company from "./components/Company";

function App() {
  return (
    <>
      <Header />
      <Joboptions />
      <div className="w-[24%] border-l-2 bg-[#FCFCFC] absolute h-full right-1 p-6">
        <PostData />
      </div>

      <JobData />
      <Company />
    </>
  );
}

export default App;
