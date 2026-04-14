import React from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import "./Home.css";
export default function Home(){
    return (
        <div id = "home" className="home">
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight> 
        </div>
    );
};