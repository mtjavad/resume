import React,{Component} from 'react';
import '../SkillSection.css';
import { IconContext } from "react-icons";
import {DiJqueryLogo} from "react-icons/di";

export default class HtmlSkill extends Component {
    render() {
        return (
            <div className={'third-content'}>
                    <div className={'upanimation'}>
                        <IconContext.Provider value={{size:"5em" }}>
                            <div><DiJqueryLogo/></div>
                        </IconContext.Provider>
                        <p>JQUERY</p>
                    </div>
            </div>
        )
    }
}