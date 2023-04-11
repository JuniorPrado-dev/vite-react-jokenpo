import { useState } from "react"
//import "./index.css"
import * as S from "./style"
export default function SelectPlayer({playerName, setPlayerName,setStart }) {
  //atualiza nome 
  function updateName(e) {
    setPlayerName(e.target.value)
  }

  return (
    <S.Container id="player">
      <S.LabelPlayer htmlFor="player">Nome do jogador:</S.LabelPlayer>
      <S.InputPlayer maxLength={10} id="player" value={playerName} onChange={updateName} />
      {playerName&&
        <S.ButtonStart onClick={()=>{setStart(true)}} >Iniciar Partida</S.ButtonStart>}
    </S.Container>
  )
}