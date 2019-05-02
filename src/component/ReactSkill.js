import React,{Component} from 'react';
import '../SkillSection.css';
import { IconContext } from "react-icons";
import {DiReact} from "react-icons/di";

export default class HtmlSkill extends Component {
    render() {
        return (
            <div className={'third-content'}>
                    <div className={'upanimation'}>
                        <IconContext.Provider value={{size:"5em" }}>
                            <div><DiReact/></div>
                        </IconContext.Provider>
                        <p style={{'paddingLeft': '10px'}} >REACT</p>
                    </div>
            </div>
        )
    }
}