import React from 'react';
import {Shake} from 'reshake';
import data from "../data";
// import './App.css';

const {section} = data;
const Title=(props)=>{ return (
    <Shake h={5} v={5} r={3} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>
        <h1>{section[0].title}</h1>
    </Shake>
)};
export default Title