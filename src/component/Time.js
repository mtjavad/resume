import React,{Component} from 'react';
// import './App.css';

export default class Time extends Component{
    state = {time: new Date()};

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        return(
            <span style={{
                'display': 'flex',
                'flexDirection': 'row',
                'justifyContent': 'flex-start',
                'alignContent': 'center',
                'padding': '20px'}}>
                {this.state.time.toLocaleTimeString()}</span>
        )
    }
}