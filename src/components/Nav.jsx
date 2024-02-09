import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Nav = () => {
  return (
    <div className=" h-full">
    <section className="flex flex-row justify-between items-center bg-white fixed w-[100%] shadow-md z-30">
        <div className="p-10 text-[#48B6BB]" >
            <img src='../../logo.webp' alt="" height={100} width={100} />
        </div>
        <ul className="flex justify-between  min-w-[60%] pr-10 max-sm:hidden">
            <NavLink to={'/'} className='text-[#747272] hover:text-[#46a5aaf5]'>Начало</NavLink>
            <NavLink to={'/about'} className='text-[#747272] hover:text-[#46a5aaf5]'>За мен</NavLink>
            <NavLink to={'/prices'} className='text-[#747272] hover:text-[#46a5aaf5]'>Цени</NavLink>
            <NavLink to={'/contacts'} className='text-[#747272] hover:text-[#46a5aaf5]'>Контакти</NavLink>
        </ul>
        <div className="hidden max-sm:block px-4">
            <img src='../../public/hamburger.svg' alt="hamb" width={25} height={25} />
        </div>
    </section>
    {/* <Outlet /> */}
    {/* <Footer /> */}
    </div>
    
  )
}

export default Nav;

