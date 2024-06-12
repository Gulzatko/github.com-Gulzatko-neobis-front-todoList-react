import React, { useState } from 'react';

import './Category.css';

export const Category =()=> {
    const [category, setCategory] = useState({ business: "", personal: ""});
       return (
              
        <div className="categories">
                 <div className ="business">
                  <h1>Business</h1>
                   <input type="checkbox"/>
                 </div>
                  <div className ="personal">
                 <div>
                 <h1>Personal</h1>
                 <input type="checkbox"/>
                </div>
          </div>
      

        
       
    )
  }


