import React, { useState } from "react";
import PoolGroup from "./PoolGroup"

const ToggleQuestions = ({newPools,answeredPools}) => {
  const [isToggle, setIsToggle] = useState(true);

  const toggleChange = ()=>{
    setIsToggle(!isToggle)
  }
  
  return (
    <>
     <h1>Simple Toggle Values </h1>
    <div>
      <input
        type="radio"
        value={true}
        name="toggle"
        checked={isToggle}
        onChange={toggleChange}
      />
      <label>Unanswered </label>
      <input
        type="radio"
        value={false}
        name="toggle"
        onChange={toggleChange}
      />
      <label>Answered </label>
    </div>
     {
       isToggle ? (<PoolGroup type="New Questions" poolIds={newPools}/>):
       ( <PoolGroup type="Done" poolIds={answeredPools}/>)
     }
    </>
  );
}

export default ToggleQuestions;