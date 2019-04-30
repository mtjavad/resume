import React, {Component} from 'react';
import store from './M';
import {observer} from 'mobx-react';

@ observer()
class Button extends Component{
    render(){
    return(
        <div>
            {store.time.toLocaleTimeString()}
        </div>
    )}
}
export default Button