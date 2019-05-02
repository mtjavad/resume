import React from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll';
import { IconContext } from "react-icons";
import {FiArrowDownCircle} from "react-icons/fi";
import data from "../data";
import '../HeaderSection.css';

const {section} = data;
const Down1=(props)=>{ return (
    <div className={'down1 upanimation'}><Link to="About" smooth={true} duration={1000}>
        <IconContext.Provider value={{size:"3em" }}>
            <div><FiArrowDownCircle/></div>
        </IconContext.Provider>
        </Link>
    </div>
    )};
export default Down1