import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";
import Time from "./Time";
import '../Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className={'navigation'} style={{'color':this.props.color}}>
                <ul>
                    <ListItem name={'About'}/>
                    <ListItem name={'Skills'}/>
                    <Time/>
                </ul>
            </div>
        )
    }
};
Navbar.propTypes={
    color: PropTypes.string
};