import React from "react";

const Action = ({ handleClick, type, className }) => {
    console.log("className",type)
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  );
};

export default Action;