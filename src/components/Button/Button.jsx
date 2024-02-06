import React from "react";

const Button = ({bg,hover,children}) => {
  return (
   <button className={` text-[#ffffff] font-medium rounded-full bg-${Button.styles.bg[bg] || ''}
     cursor-pointer py-2 px-5 hover:bg-${Button.styles.bg[hover]} transition-all 2s ease-linear shadow-customGray`}>{children}</button>
  )
}
Button.styles = {
  'bg' :{
    'lightBlue' : 'lightBlue',
    'hoverBlue' : 'hoverBlue',
    'black' : 'black'
    }
}
export default Button;


