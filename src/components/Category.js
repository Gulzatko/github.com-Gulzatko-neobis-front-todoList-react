import React, { useState } from 'react';
import './Category.css';

export const Category=({selectCategory})=> {
  
   
   

  return (
    <div className ="categories">
        <div className ="business">
        <label for="Business">Business</label>
          <input  type="radio" value="Business" className="" checked/>
          </div>
          <div>
          <label for="Personal">Personal</label>
          <input type="radio" value="Personal" className = "personal"/>
          </div>
      </div>
  )
}
