import React, { useState } from 'react';


export const Category=()=> {
    const [category, setCategory] = useState("")
  
    return (

    <div>
        <div>
          <h1>Business</h1>
          <input type="radio"/>
        </div>
         <div>
           <h1>Personal</h1>
           <input type="radio"/>
         </div>
    </div>
  )
}
