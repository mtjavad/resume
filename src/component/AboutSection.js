import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Down2 from './Down2';
import data from '../data';
import '../AboutSection.css';

export default class AboutSection extends Component {
    render() {
        const {section} = data;
        return (
            <div className={'second-section full-page'} style={{'backgroundColor':this.props.bgColor,'color':this.props.color}}>
                <h2>{section[1].title}</h2>
                <p className={'second-content'}>{section[1].content}</p>
                <Down2/>
            </div>
        )
    }
};
AboutSection.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.string
};