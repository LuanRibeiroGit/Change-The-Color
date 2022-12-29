import React, { useState } from "react";

import './App.css'

export default props =>{
  const color = (event) =>{

    let cor = document.getElementById(event.target.id).style.backgroundColor
    if(cor == 'rgb(153, 153, 153)'){
      cor = document.getElementById(event.target.id).style.backgroundColor = 'rgb(51, 51, 51)'
    }else if(cor == 'rgb(51, 51, 51)'){
      cor = document.getElementById(event.target.id).style.backgroundColor = 'rgb(153, 153, 153)'
    }
    
  }

return(
  <div id="App">
    <div id="map1" onClick={color} style={{backgroundColor: '#999'}}/>
    <div id="map2" onClick={color} style={{backgroundColor: '#999'}}/>
    <div id="map3" onClick={color} style={{backgroundColor: '#999'}}/>
    <div id="map4" onClick={color} style={{backgroundColor: '#999'}}/>
    <div id="map5" onClick={color} style={{backgroundColor: '#999'}}/>
  </div>
)
}