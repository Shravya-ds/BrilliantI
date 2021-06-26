import React from "react";
import Navigation from "./Navigation"





function Header() {
  return (
    <header className="border-b font-bold p-3 flex floating">
    	
    		<Navigation />
        <span className="font-bold text-4xl p-5">
    			Brilliant
    		</span>
        <span className=" font-size:1rem p-8">Today</span>
        <span className=" font-size:1rem p-8">Course</span>
        <span className=" font-size:1rem p-8">Practice</span>
        <div className="border-2 w-52 text-black text-2xl bg-blue-50  absolute  top-8 right-20 p-6 h-16 mr-40 ">Login</div>
        <div className="border-2 w-52 text-black text-2xl bg-blue-50 absolute top-8 right-0 p-6  h-16  ">Signin</div>
    </header>
  );
}

export default Header;