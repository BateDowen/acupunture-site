import React from "react";

const Button = ({bg,hover,children}) => {
  return (
   <button className={` text-[#FFFFFF] font-medium rounded-full bg-[${Button.styles.bg[bg]}]
     cursor-pointer py-2 px-5 hover:bg-[${Button.styles.bg[hover]}] transition-all 2s ease-linear`}>{children}</button>
  )
}
Button.styles = {
  'bg' :{
     'lightBlue' : '#48b6bb',
      'hoverBlue' : '#2A6466'
    }
}
export default Button;


