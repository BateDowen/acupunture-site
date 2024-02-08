import React from "react";
import './Button.styles.css';

const Button = ({bg,hover,children}) => {
  const hoverColor = Button.styles.bg[hover]
  console.log(`${hoverColor}`);

  return (
   <button className={
    ` text-[#ffffff] font-medium rounded-full ${Button.styles.bg[bg] || ''}
     cursor-pointer py-2 px-5 hover:${hoverColor} transition-all ease-linear shadow-customGray`
    }>{children}</button>
  )
}
Button.styles = {
  'bg' :{
    'lightBlue' : 'lightBlue',
    'hoverBlue' : 'hoverBlue',
    }
}
export default Button;


