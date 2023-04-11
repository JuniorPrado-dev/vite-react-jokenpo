import { useState } from "react"
//import "./index.css"
import * as S from "./style"
export default function Player({playerName,imgChoice}){
  const [pont,setPont]=useState(0)  
  return (
      <S.Container id="player">
        <S.Name id="playerName">{playerName}</S.Name>
        <S.Image id="S.ImageChoice" src={imgChoice} ></S.Image>
        <S.Pont id="pont">pontuação: {pont}</S.Pont>
      </S.Container>
    )
}