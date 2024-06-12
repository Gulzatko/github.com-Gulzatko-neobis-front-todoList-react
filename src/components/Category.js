import React, { useState } from 'react';
import { CategoryInput } from './CategoryInput';

export const Category =()=> {
    const [category, setCategory] = useState({ business: "", personal: ""});
    return (
        <div>
             <CategoryInput 
        type="checkbox"
       value={category.business} 
       onClick={e => 
       setCategory({ ...category, business: e.target.value })} 
       />
        <CategoryInput
        type="checkbox"
        value={category.personal}
         onClick={e => 
         setCategory({ ...category, personal: e.target.value })} 
         />

        </div>
       
    )
  }


