import React,{Component} from 'react';
import data from '../data';
import '../SkillSection.css';

export default class SkillItem extends Component {
    render() {
        const {section} = data;
        return (
            <div className={'third-content'}>
                {section[2].content.map(el=> {return(
                    <div className={'upanimation'} key={el.caption}>
                        <img src={el.img} alt={el.caption} key={el.caption}/>
                        {el.caption==='Java Script' ?  <p style={{'paddingLeft': '20px'}} key={el.caption}>{el.caption}</p> : <p style={{'paddingLeft': '40px'}} key={el.caption}>{el.caption}</p>}
                    </div>
                )})};
            </div>
        )
    }
}