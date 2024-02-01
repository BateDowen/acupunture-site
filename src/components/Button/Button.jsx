import React from "react";

const Button = (props) => {
  return (
   <button className=" text-[#FFFFFF] font-medium rounded-full
    bg-[#48b6bb] cursor-pointer py-2 px-5 hover:bg-[#2A6466] transition-all 2s ease-linear">{props.children}</button>
  )
}

export default Button;


