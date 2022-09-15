import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
// import AppBar from "./component/AppBar";
import { AppBar, Toolbar, Typography, Divider } from "@material-ui/core";

import Containers from "./Containers";
import Grids from "./Grids";


const RouteMain=()=>{

    return (
        <div>
        <AppBar position="static">

      </AppBar>

      <br />

      <Containers />

      <br />

      <Divider />

      <br />

      <Grids />

        </div>

    )
}

export default RouteMain;
