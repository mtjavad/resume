import React from 'react';
import {animateScroll as scroll, Element, Link} from 'react-scroll';

const ListItem=(props)=>{ return (
    <Link to={props.name} smooth={true} duration={1000}><li>{props.name}</li></Link>)
};
export default ListItem