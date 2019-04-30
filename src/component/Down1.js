import React from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll';
import data from "../data";
import '../HeaderSection.css';

const {section} = data;
const Down1=(props)=>{ return (
    <div className={'down1 upanimation'}><Link to="About" smooth={true} duration={1000}><img src={section[0].down} alt={'downArrow'}/></Link></div>
    )};
export default Down1