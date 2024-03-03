import { NavLink, Outlet, useNavigate } from "react-router-dom";
import  "./Nav.styles.css";
import { useState } from "react";
import Button from "../Button/Button";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const dinamicCss = ` duration-700 ${isHidden ? 'right-0' : 'right-[-100%]'}`
  const showNavHandler = () => {
    setIsHidden(!isHidden);
  };
// TODO modal navbar
  return (
    <div className=" h-full">
      <section className="flex flex-row justify-between items-center bg-white fixed w-[100%] shadow-md z-30">
        <div className="p-10 text-[#48B6BB]">
          <NavLink to={"/"} className="text-[#747272] hover:text-[#46a5aaf5]">
            <img src="../../logo.webp" alt="" height={100} width={100} />
          </NavLink>
        </div>
        <div className={`nav-primary `}>
          <NavLink to={"/"}className="hover:text-[#46a5aaf5]"> Начало</NavLink>
          <NavLink to={"/about"} className=" hover:text-[#46a5aaf5]" >  За мен</NavLink>
          <NavLink to={"/prices"} className=" hover:text-[#46a5aaf5]"> Цени</NavLink>
          <NavLink to={"/contacts"} className="hover:text-[#46a5aaf5]" >  Контакти</NavLink>
        </div>
        <div className="hidden max-sm:block px-4">
          <img onClick={showNavHandler} src="../../public/hamburger.svg" alt="hamb" width={25} height={25} />
        </div>
           <div onClick={showNavHandler} className={`${dinamicCss} small-screen-nav shadow-md h-full bg-[#F5FCFC]`}>
            <div className={`${dinamicCss} small-screen-nav border-b-0 text-xl font-bold bg-[#F5FCFC]`}>
             <NavLink to={"/"}className="hover:text-[#46a5aaf5]"> Начало</NavLink>
             <NavLink to={"/about"} className=" hover:text-[#46a5aaf5]" >  За мен</NavLink>
             <NavLink to={"/prices"} className=" hover:text-[#46a5aaf5]"> Цени</NavLink>
             <NavLink to={"/contacts"} className="hover:text-[rgba(70,165,170,0.96)]" >  Контакти</NavLink>
             <NavLink to={'/appointments'}>
              <Button bg="btn-primary">Запазете час</Button>
             </NavLink>
            </div>
        </div>
      </section>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Nav;
