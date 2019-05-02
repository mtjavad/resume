import React,{Component} from 'react';
import '../SkillSection.css';
import { IconContext } from "react-icons";
import {DiHtml5} from "react-icons/di";

export default class HtmlSkill extends Component {
    render() {
        return (
            <div className={'third-content'}>
                    <div className={'upanimation'}>
                        <IconContext.Provider value={{size:"5em" }}>
                            <div><DiHtml5/></div>
                        </IconContext.Provider>
                        <p style={{'paddingLeft': '15px'}} >HTML</p>
                    </div>
            </div>
        )
    }
}