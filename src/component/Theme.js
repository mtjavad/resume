import React,{Component} from 'react';
import data from '../data.json';
// import './App.css';

export default class Theme extends Component {
    render() {
        const {section} = data;
        return (
            <li onClick={this.props.onClick}><img src={section[3].themeIcon} alt={'theme'}/></li>
        )
    }
}