import React, {Component} from 'react';
import Navbar from './component/Navbar';
import HeaderSection from './component/HeaderSection';
import AboutSection from './component/AboutSection';
import SkillSection from './component/SkillSection';
import {Element} from 'react-scroll';
import SnowStorm from 'react-snowstorm';
import { IconContext } from "react-icons";
import { IoMdColorFill } from "react-icons/io";
import data from './data.json';
import './App.css';

export default class App extends Component {
    state={bgColor: 'lightblue', color: 'darkslateblue'};
    changeColor = () => {
        {this.state.bgColor==='lightblue' && this.setState({bgColor: 'cadetblue', color: 'blanchedalmond'})}
        {this.state.bgColor==='cadetblue' && this.setState({bgColor: 'bisque', color: 'purple'})}
        {this.state.bgColor==='bisque' && this.setState({bgColor: 'forestgreen', color: 'darkorange'})}
        {this.state.bgColor==='forestgreen' && this.setState({bgColor: 'lightcoral', color: 'beige'})}
        {this.state.bgColor==='lightcoral' && this.setState({bgColor: 'lightblue', color: 'darkslateblue'})}
    };

    render() {
        const {section} = data;
        return (
            <div>
                <Navbar color={this.state.color}/>
                <IconContext.Provider value={{color: "purple",size:"7em", className:"theme-icon" }}>
                    <div onClick={this.changeColor}><IoMdColorFill/></div>
                </IconContext.Provider>
                    <SnowStorm/>
                <HeaderSection bgColor={this.state.bgColor} color={this.state.color}/>
                <Element name="About" className="element">
                    <AboutSection bgColor={this.state.bgColor} color={this.state.color}/>
                </Element>
                <Element name="Skills" className="element">
                    <SkillSection bgColor={this.state.bgColor} color={this.state.color}/>
                </Element>
            </div>
        )
    }
}