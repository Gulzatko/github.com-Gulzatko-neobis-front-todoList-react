
import React, { useState } from "react";
import "./Category.css";
export const Category = ({ setCategory }) => {
   const handleClick = (e) => {
      const radioInput = e.target.closest(".categories__radio");
      if (radioInput && radioInput.classList.contains("categories__radio_personal")) {
         setCategory("personal");
      } else {
         setCategory("business");
      }
   };
   return (
      <div className="categories" onClick={handleClick}>
         <label className="business">
            <h1>Business</h1>
            <input
               className="categories__radio"
               type="radio"
               name="category"
               defaultValue="business"
            />
         </label>
         <label className="personal">
            <h1>Personal</h1>
            <input
               className="categories__radio categories__radio_personal"
               type="radio"
               name="category"
               defaultValue="personal"
            />
         </label>
      </div>
   );
};