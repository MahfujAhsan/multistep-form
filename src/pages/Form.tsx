import React, { useState } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

const Form = () => {
  const [page, setPage] = useState<number>(0);
  const FormTitles: string[] = ["Sign Up", "Personal Info", "Other"];
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else {
      return <OtherInfo />;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
      <div className="w-6/12 mx-auto h-1 bg-white mb-6">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }} className="bg-pink-500 h-full"
        ></div>
      </div>
        <div className="text-center">
          <h1 className="text-2xl font-mono">{FormTitles[page]}</h1>
        </div>
        <div className="w-6/12 mx-auto my-12">{PageDisplay()}</div>
        <div className="flex justify-around">
          
        </div>
      </div>
    </div>
  );
};

export default Form;
