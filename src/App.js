import React, {Component} from 'react';
import Navbar from './component/Navbar';
import HeaderSection from './component/HeaderSection';
import AboutSection from './component/AboutSection';
import SkillSection from './component/SkillSection';
import {Element} from 'react-scroll';
import SnowStorm from 'react-snowstorm';
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
                {/*<li onClick={this.changeColor}>*/}
                    {/*<ShakeHorizontal h={5}>*/}
                    {/*<div className={'theme-icon'}>*/}
                    {/*<Time/>*/}
                        <img src={section[3].themeIcon} className={'theme-icon'} alt={'theme'} onClick={this.changeColor}/>
                    {/*</div>*/}
                        {/*</ShakeHorizontal>*/}
                    {/*</li>*/}
                {/*<div className={'navigation'}>*/}
                    <SnowStorm/>
                    {/*<ul>*/}
                        {/*<ListItem name={'About'}/>*/}
                        {/*<ListItem name={'Skills'}/>*/}
                        {/*<Time/>*/}
                        {/*<Theme/>*/}
                        {/*/!*<li><Link to="About" smooth={true} duration={1000}>About</Link></li>*!/*/}
                        {/*/!*<li><Link to="Skills" smooth={true} offset={50} duration={1000}>Skills</Link></li>*!/*/}
                        {/*/!*<li>{this.state.time.toLocaleTimeString()}</li>*!/*/}
                        {/*/!*<li onClick={this.changeColor}><ShakeLittle><img src={section[3].themeIcon} alt={'theme'}/></ShakeLittle></li>*!/*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <HeaderSection bgColor={this.state.bgColor} color={this.state.color}/>
                {/*<div className={'first-section full-page'} style={{'backgroundColor': this.state.bgColor,'color':'this.state.color'}}>*/}
                    {/*<Title/>*/}
                    {/*/!*<Shake h={5} v={5} r={3} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>*!/*/}
                        {/*/!*<h1>{section[0].title}</h1>*!/*/}
                    {/*/!*</Shake>*!/*/}
                    {/*<h3>{section[0].subtitle}</h3>*/}
                    {/*<SocialIcons/>*/}
                    {/*/!*<div className={'social-icon'}>*!/*/}
                        {/*/!*{Object.values(section[0].links)}*!/*/}
                        {/*/!*{Object.values(section[0].links).map(el=>{return(<ShakeLittle><SocialIcon url={el}/></ShakeLittle>)})}*!/*/}
                        {/*/!*<ShakeLittle><SocialIcon url="https://www.pinterest.com"/></ShakeLittle>*!/*/}
                        {/*/!*<ShakeRotate><SocialIcon url="https://twitter.com"/></ShakeRotate>*!/*/}
                        {/*/!*<ShakeLittle><SocialIcon url="https://plus.google.com"/></ShakeLittle>*!/*/}
                        {/*/!*<ShakeRotate><SocialIcon url="https://www.instagram.com"/></ShakeRotate>*!/*/}
                    {/*/!*</div>*!/*/}
                    {/*<Down1/>*/}
                    {/*/!*<div className={'down1'}><Link to="About" smooth={true} duration={1000}><img src={section[0].down} alt={'downArrow'}/></Link></div>*!/*/}
                {/*</div>*/}
                <Element name="About" className="element">
                    <AboutSection bgColor={this.state.bgColor} color={this.state.color}/>
                    {/*<div className={'second-section full-page'} style={{'backgroundColor': this.state.bgColor,'color':'this.state.color'}}>*/}
                        {/*<h2>{section[1].title}</h2>*/}
                        {/*<p className={'second-content'}>{section[1].content}</p>*/}
                        {/*<Down2/>*/}
                        {/*/!*<div className={'down2'}><Link to="Skills" smooth={true} offset={50} duration={1000}><img  src={section[1].down} alt={'downArrow'}/></Link></div>*!/*/}
                    {/*</div>*/}
                </Element>
                <Element name="Skills" className="element">
                    <SkillSection bgColor={this.state.bgColor} color={this.state.color}/>
                    {/*<div className={'third-section full-page'} style={{'backgroundColor': this.state.bgColor,'color':'this.state.color'}}>*/}
                        {/*<div>*/}
                            {/*<h2>{section[2].title}</h2>*/}
                        {/*</div>*/}
                        {/*<SkillItem/>*/}
                        {/*<div className={'third-content'}>*/}
                            {/*{section[2].content.map(el=> {return(*/}
                                    {/*<div>*/}
                                        {/*<img src={el.img} alt={el.caption}/>*/}
                                        {/*{el.caption==='Java Script' ?  <p style={{'paddingLeft': '20px'}}>{el.caption}</p> : <p style={{'paddingLeft': '40px'}}>{el.caption}</p>}*/}
                                    {/*</div>*/}
                                {/*)})};*/}
                            {/*<div>*/}
                                {/*<img src={section[2].content[0].img} alt={'HTML'}/>*/}
                                {/*<p style={{'paddingLeft': '40px'}}>{section[2].content[0].caption}</p>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<img src={section[2].content[1].img} alt={'CSS'}/>*/}
                                {/*<p style={{'paddingLeft': '45px'}}>{section[2].content[1].caption}</p>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<img src={section[2].content[2].img} alt={'JAVASCRIPT'}/>*/}
                                {/*<p style={{'paddingLeft': '20px'}}>{section[2].content[2].caption}</p>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<img src={section[2].content[3].img} alt={'jQuery'}/>*/}
                                {/*<p style={{'paddingLeft': '40px'}}>{section[2].content[3].caption}</p>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*<img src={section[2].content[4].img} alt={'REACT'}/>*/}
                                {/*<p style={{'paddingLeft': '40px'}}>{section[2].content[4].caption}</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={'up'}><img src={section[2].up} onClick={this.scrollToTop} alt={'upArrow'}/></div>*/}
                            {/*</div>*/}
                </Element>
            </div>
        )
    }

}