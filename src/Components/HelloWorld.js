import React from "react";
import Contents from "./Contents";
import one from './images/one.jfif';
import CardList from './CardList'
import Scroll from './Scroll';
import SearchBox from "./SearchBox"
import { robots } from "../robots";
import List from "./List"




function HelloWorld() {
  return (
  <div>
      <div className="float-right ">
       <button className="float-right b-6 m-6 ">
      <img className="float-right b-6 m-6 box-border" src={one} alt="this is car image" /> 
      
      </button>
      
          <span className=" font-bold p-5 text-6xl w-px">Logic</span><br></br><br></br>
          <span className="  p-5 text-4xl w-px">Stretch your analytic muscles with knights,
              knaves, logic gates, and more!</span> <br></br><br></br>
          <span>The beginning of our introductory math journey is
              Logic. Through these challenging problem solving 
              exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
              <br></br><br></br>

              You'll use limited information to make predictions – 
              eliminating the impossible to uncover the truth. 
              This course builds up to some truly mind-bending challenges!
              Read more
          </span><br></br><br></br><br></br><br></br>
              <span className="border-2 w-52 text-black text-2xl bg-blue-50 absolute right-20 p-5  h-8 " >
              <button>Start</button>
              </span>

      </div>
      <List />
      </div>)


  
      }

export default HelloWorld;