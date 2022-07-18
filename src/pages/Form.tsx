import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';git init

const Form = () => {
  const [page, setPage] = useState<number | number>(0);
  const formTitles: string[] = ["Sign Up", "Personal Info", "Other"];
  return (
    <div className="w-50">
      <div></div>
      <div className="grid grid-rows-3 place-items-center">
        <div>
            <h1>{formTitles[page]}</h1>
        </div>
        <div></div>
        <div>
          <button className="bg-green-500" disabled={page === 0} onClick={() => {setPage((currentPage) => currentPage - 1)}}>Prev</button>
          <button className="bg-stone-700" disabled={page === formTitles.length - 1} onClick={() => {setPage((currentPage) => currentPage + 1)}}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
