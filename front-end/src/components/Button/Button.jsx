import React from "react";
import './Button.styles.css';
import { useNavigate } from "react-router-dom";

const Button = ({bg,children}) => {

  return (
   <button className={
    ` text-[#ffffff] font-medium rounded-full ${Button.styles.bg[bg] || ''}
     cursor-pointer py-2 px-5  transition-all ease-linear shadow-customGray`
    }>{children}</button>
  )
}
Button.styles = {
  'bg' :{
    'btn-primary' : 'btn-primary',
    'btn-secondary' : 'btn-secondary',
    }
}
export default Button;


