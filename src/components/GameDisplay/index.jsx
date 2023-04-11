import { useState } from "react"
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"
import interroga from "../../assets/interroga.png"
import * as S from "./style"
import Player from "../Player"
import Choice from "../Choice"
export default function GameDisplay() {

  const [player, setPlayer] = useState('')
  const [choiceP, setChoiceP] = useState(undefined)
  const [choiceC, setChoiceC] = useState(undefined)
  const [winner, setWinner] = useState(undefined)

  //atualiza nome 
  function updateName(e) {
    setPlayer(e.target.value)
  }
  //opções
  const optionChoices = [
    { name: "pedra", image: pedra },
    { name: "papel", image: papel },
    { name: "tesoura", image: tesoura },
  ]
  //escolhe pc
  function selectChoieC() {
    let i = 0
    const repet = setInterval(() => {
      const select = Math.floor(Math.random() * 3);
      console.log(select);
      setChoiceC(optionChoices[select])
      i++;
      if (i > 10) {
        clearInterval(repet)
      }
    }, 200);

    if (choiceC && choiceP) {
      l
      choiceWinner(choiceP, choiceC);
    }
  };

  function choiceWinner(choiceP, choiceC) {

    if (choiceC.name === choiceP.name) {
      setWinner(undefined);
    } else if (choiceP.name === "pedra") {
      if (choiceC.name === "papel") {
        setWinner("computer");
      } else {
        setWinner("Player");
      }
    } else if (choiceP.name === "papel") {
      if (choiceC.name === "tesoura") {
        setWinner("computer");
      } else {
        setWinner("Player");
      }
    } else if (choiceP.name === "tesoura") {
      if (choiceC.name === "pedra") {
        setWinner("computer");
      } else {
        setWinner("Player");
      }
    }
    console.log(winner);
  }
  return (
    <S.Container>
      <S.NameGame>Jokenpô</S.NameGame>
      <S.LabelPlayer htmlFor="player">Nome do jogador:</S.LabelPlayer>
      <S.InputPlayer maxLength={10} id="player" value={player} onChange={updateName} />
      <S.ButtonStart>Iniciar Partida</S.ButtonStart>
      <S.ContainerPlayers>
        <Player playeName={player} imgChoice={choiceP ? choiceP.image : interroga} />
        {!choiceP && <Choice optionChoices={optionChoices} setChoiceP={setChoiceP} />}
        {choiceP && <S.ButtonGo onClick={selectChoieC}>Jokenpo!</S.ButtonGo>}
        <Player playeName={"Computer"} imgChoice={choiceC ? choiceC.image : interroga} />
      </S.ContainerPlayers>
    </S.Container>
  )
}