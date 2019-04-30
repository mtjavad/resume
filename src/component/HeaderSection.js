import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Down1 from './Down1';
import SocialIcons from './SocialIcons';
import data from '../data';
import '../HeaderSection.css';

export default class HeaderSection extends Component {
    render() {
        const {section} = data;
        return (
            <div className={'first-section full-page'} style={{'backgroundColor':this.props.bgColor,'color':this.props.color}}>
                <Title/>
                <h3>{section[0].subtitle}</h3>
                <SocialIcons/>
                <Down1/>
            </div>
        )
    }
};
HeaderSection.propTypes={
    bgColor: PropTypes.string,
    color: PropTypes.string
};