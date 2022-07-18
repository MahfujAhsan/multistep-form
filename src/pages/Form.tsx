import React, { useState } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

const Form = () => {
  const [page, setPage] = useState<number>(0);
  const FormTitles: string[] = ["Sign Up", "Personal Info", "Other"];
  const PageDisplay = () => {
    if(page === 0) {
        return <SignUpInfo />
    } else if (page === 1){
        return <PersonalInfo />
    } else {
        return <OtherInfo />
    }
  }
  return (
    <div className="flex justify-center">
      <div></div>
      <div className="w-10/12">
        <div className="text-center">
          <h1 className="text-2xl font-mono">{FormTitles[page]}</h1>
        </div>
        <div className="w-6/12 mx-auto my-12">{PageDisplay()}</div>
        <div className="flex justify-around">
          <button
            className={`px-6 py-3 font-bold text-2xl text-white ${page === 0 ? "bg-green-300" : "bg-green-800"}`}
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            <TbPlayerTrackPrev />
          </button>
          <button
            className={`px-6 py-3 font-bold text-2xl text-white ${page === FormTitles.length - 1 ? "bg-slate-300" : "bg-slate-800"}`}
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            <TbPlayerTrackNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
