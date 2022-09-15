import React from "react";
import './App.css';
import RouteMain from "./RouteMain";
import { BrowserRouter } from "react-router-dom";

const Root=()=>{

    return (
        <div>
            <BrowserRouter >
                <RouteMain/>
            </BrowserRouter>
            
        </div>

    )
}

export default Root;
