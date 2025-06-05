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
          <NavLink to={"/"} className="text-[#747272] hover:text-darkwood">
            <img src="../../logo.png" alt="" height={100} width={100} className="rounded-full"/>
          </NavLink>
        </div>
        <div className={`nav-primary `}>
          <NavLink to={"/"}className={({isActive}) => (isActive ? ' nav-link-active' : ' nav-link-not-active')}> Начало</NavLink>
          <NavLink to={"/about"} className={({isActive}) => (isActive ? ' nav-link-active' : ' nav-link-not-active')} >  За нас</NavLink>
          <NavLink to={"/blog"} className={({isActive}) => (isActive ? ' nav-link-active' : ' nav-link-not-active')} >  Блог</NavLink>
          <NavLink to={"/prices"} className={({isActive}) => (isActive ? ' nav-link-active' : ' nav-link-not-active')}> Цени</NavLink>
          <NavLink to={"/contacts"} className={({isActive}) => (isActive ? ' nav-link-active' : ' nav-link-not-active')}>  Контакти</NavLink>
          <NavLink to={'/appointments'} className=' ml-3'><div className="shadow-customGray  rounded-full animate-bounce"><Button bg="btn-primary">Запазете час</Button></div></NavLink>
        </div>
        <div className="hidden max-md:block px-4">
          <img onClick={showNavHandler} src="../../hamburger.svg" alt="hamb" width={25} height={25} />
        </div>
           <div onClick={showNavHandler} className={`${dinamicCss} small-screen-nav shadow-md h-full bg-lightwood`}>
            <div className={`${dinamicCss} small-screen-nav border-b-0 text-xl font-bold bg-lightwood`}>
             <NavLink to={"/"}className={({isActive}) => (isActive ? ' underline text-darkwood' : ' hover:text-darkwood')}> Начало</NavLink>
             <NavLink to={"/about"} className={({isActive}) => (isActive ? ' underline text-darkwood' : ' hover:text-darkwood')} >  За нас</NavLink>
             <NavLink to={"/blog"} className={({isActive}) => (isActive ? ' underline text-darkwood' : ' hover:text-darkwood')} >  Блог</NavLink>
             <NavLink to={"/prices"} className={({isActive}) => (isActive ? ' underline text-darkwood' : ' hover:text-darkwood')}> Цени</NavLink>
             <NavLink to={"/contacts"} className={({isActive}) => (isActive ? ' underline text-darkwood' : ' hover:text-darkwood')} >  Контакти</NavLink>
             <NavLink to={'/appointments'}>
              <div className=" mx-auto rounded-full animate-bounce">
                <Button bg="btn-primary">Запазете час</Button>
              </div>
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
