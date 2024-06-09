import React, { useState } from 'react';
import './Category.css';

export const Category=({selectCategory})=> {
  const [ category, setCategory] = useState([]);
   
   const handleCategory =(e)=>{
    e.preventDefault();
    if(e.target.value = "Business"){
      setCategory({category:business})
    } else if (e.target.value = "Personal"){
       setCategory({category:personal})
    }
     else {
      return
     }
  }

  return (
    <div onClick={handleCategory}>
        <div >
           
          <input  type="radio" value="Business" className ="business" checked/>
          <label for="Business">Business</label>

          <input type="radio" value="Personal" className = "personal"/>
         </div>
      </div>
  )
}
