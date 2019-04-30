import React from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll';
import data from "../data";
import '../App.css';

const {section} = data;
const Down2=(props)=>{ return (
    <div className={'down2 upanimation'}><Link to="Skills" smooth={true} offset={50} duration={1000}><img  src={section[1].down} alt={'downArrow'}/></Link></div>
)};
export default Down2