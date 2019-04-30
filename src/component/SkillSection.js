import React,{Component} from 'react';
import PropTypes from 'prop-types';
import SkillItem from "./SkillItem";
import {animateScroll as scroll} from "react-scroll/modules";
import data from '../data';
import '../SkillSection.css';


export default class SkillSection extends Component {
    scrollToTop() {
        scroll.scrollToTop();
    };
    render() {
        const {section} = data;
        return (
            <div className={'third-section full-page'} style={{'backgroundColor':this.props.bgColor,'color':this.props.color}}>
                <div><h2>{section[2].title}</h2></div>
                <SkillItem/>
                <div className={'up upanimation'}><img src={section[2].up} onClick={()=>this.scrollToTop()} alt={'upArrow'}/></div>
            </div>
        )
    }
};
SkillSection.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.string
};