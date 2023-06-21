import React, { useState } from 'react'
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCart from "./MenuCart.js";
import NavBar from "./NavBar";

const uniqueList= [
   ...new Set(
   Menu.map( (curEle)=>{
      return curEle.category;
      })),
      "All",
   ];



const Resturant = () => {

const [menuData, setMenuData]=useState(Menu);
const [menuList,setMenuList]=useState(uniqueList);
const filterItem= (category)=>{

   if(category==="All"){
      setMenuData(Menu);
      return;
   }
    const updatedList=Menu.filter((curEle)=>{

return curEle.category=== category;
   });

   setMenuData(updatedList);
};
   return (
      <>
<NavBar filterItem={filterItem} menuList={menuList}/>
<MenuCart menuData={menuData}/>

      </>
   );
};

export default Resturant