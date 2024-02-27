import React from "react";
import style from './SideNevbar.module.css';
import { FaHome } from "react-icons/fa";
function SideNevbar() {
const navItems = [
  {
    icon:<FaHome/>,
    iconName:'Home',
    id:'1'
  },
  {
    icon:<FaHome/>,
    iconName:'conta',
    id:'2'
  },
  {
    icon:<FaHome/>,
    iconName:'about',
    id:'3'
  }
]
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.titleContainer}>
          <h2 className={style.heading}>Movie Megnet</h2>
          <button className={style.button}>
            Subscribe
          </button>
          <div className="mt-[20vh] flex flex-col gap-[25px]">
            {navItems.map((item , index)=>
             <li className={style.navIcons} key={index}>
               {item.icon}
                <span className="">{item.iconName}</span></li>
            )}
          
          </div>
        </div>           
      </div>
    </>
  );
}

export default SideNevbar;
