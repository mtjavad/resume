import React,{Component} from 'react';
import data from '../data';
import '../HeaderSection.css';
import {ShakeLittle} from "reshake";
import {SocialIcon} from 'react-social-icons';

export default class SocialIcons extends Component {
    render() {
        const {section} = data;
        return (
            <div className={'social-icon'}>
                {Object.values(section[0].links).map(el=>{return(<ShakeLittle><SocialIcon url={el}/></ShakeLittle>)})}
            </div>
        )
    }
}