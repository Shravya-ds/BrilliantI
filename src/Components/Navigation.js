import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'



function Navigation() {
  return (
    <header className=" font-bold p-5 text-4xl w-px">
    		<FontAwesomeIcon icon= {faGlobe}/>
    </header>
  );
}

export default Navigation;