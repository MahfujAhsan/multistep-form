import React, { useState } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const Form = () => {
  const [page, setPage] = useState<number | number>(0);
  const formTitles: string[] = ["Sign Up", "Personal Info", "Other"];
  return (
    <div className="flex justify-center">
      <div></div>
      <div className="w-10/12">
        <div className="text-center">
          <h1>{formTitles[page]}</h1>
        </div>
        <div></div>
        <div className="flex justify-between">
          <button
            className={`px-6 py-3 font-bold text-2xl text-white ${page === 0 ? "bg-green-700" : "bg-green-500"}`}
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            <TbPlayerTrackPrev />
          </button>
          <button
            className={` px-6 py-3 font-bold text-2xl text-white ${page === formTitles.length - 1 ? "bg-slate-400" : "bg-slate-800"}`}
            disabled={page === formTitles.length - 1}
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
