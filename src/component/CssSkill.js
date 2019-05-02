import React,{Component} from 'react';
import '../SkillSection.css';
import { IconContext } from "react-icons";
import {DiCss3} from "react-icons/di";

export default class HtmlSkill extends Component {
    render() {
        return (
            <div className={'third-content'}>
                    <div className={'upanimation'}>
                        <IconContext.Provider value={{size:"5em" }}>
                            <div><DiCss3/></div>
                        </IconContext.Provider>
                        <p style={{'paddingLeft': '20px'}} >CSS</p>
                    </div>
            </div>
        )
    }
}