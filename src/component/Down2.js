import React from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll';
import data from "../data";
import '../App.css';
import { IconContext } from "react-icons";
import {FiArrowDownCircle} from "react-icons/fi";

const {section} = data;
const Down2=(props)=>{ return (
    <div className={'down2 upanimation'}><Link to="Skills" smooth={true} offset={50} duration={1000}>
        <IconContext.Provider value={{size:"3em" }}>
            <div><FiArrowDownCircle/></div>
        </IconContext.Provider>
        </Link>
    </div>
)};
export default Down2