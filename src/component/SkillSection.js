import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import {FiChevronsUp} from "react-icons/fi";
import JavaSkill from "./JavaSkill";
import HtmlSkill from "./HtmlSkill";
import CssSkill from "./CssSkill";
import ReactSkill from "./ReactSkill";
import JquerySkill from "./JquerySkill";
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
                    <table>
                        <tr>
                            <td><HtmlSkill/></td>
                            <td><JavaSkill/></td>
                            <td><CssSkill/></td>
                            <td><JquerySkill/></td>
                            <td><ReactSkill/></td>
                        </tr>
                    </table>
                <div className={'up upanimation'}>
                    <IconContext.Provider value={{size:"3em" }}><div><FiChevronsUp onClick={()=>this.scrollToTop()} /></div></IconContext.Provider>
                </div>
            </div>
        )
    }
};
SkillSection.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.string
};