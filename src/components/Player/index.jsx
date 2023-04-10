import { useState } from "react"
import "./index.css"
export default function Player({playeName,imgChoice}){
  const [pont,setPont]=useState(0)  
  return (
      <div id="player">
        <h2 id="playerName">{playeName}</h2>
        <img id="imgChoice" src={imgChoice} ></img>
        <h3 id="pont">pontuação: {pont}</h3>
      </div>
    )
}