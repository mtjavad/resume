import React,{Component} from 'react';
import '../SkillSection.css';
import { IconContext } from "react-icons";
import {DiJavascript1} from "react-icons/di";

export default class JavaSkill extends Component {
    render() {
        return (
            <div className={'third-content'}>
                    <div className={'upanimation'}>
                        <IconContext.Provider value={{size:"5em" }}>
                            <div><DiJavascript1 /></div>
                        </IconContext.Provider>
                        <p style={{}}>JAVA SCRIPT</p>
                    </div>
            </div>
        )
    }
}