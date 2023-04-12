import { useState } from "react"
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"
import interroga from "../../assets/interroga.png"
import * as S from "./style"
import Player from "../Player"
import Choice from "../Choice"
import SelectPlayer from "../SelectPlayer"
export default function GameDisplay() {
  const [playerName, setPlayerName] = useState('')
  const [start, setStart] = useState(false);

  const [choiceP, setChoiceP] = useState(undefined)
  const [choiceC, setChoiceC] = useState(undefined)

  const [pontP, setPontP] = useState(0)
  const [pontC, setPontC] = useState(0)

  const [winner, setWinner] = useState("")

  //opções
  const optionChoices = [
    { name: "pedra", image: pedra },
    { name: "papel", image: papel },
    { name: "tesoura", image: tesoura },
  ]
  // console.log({winner});
  // verifica winner
  // !winner && choiceC && choiceP && console.log(choiceP.name,choiceC.name,findWinner(choiceC, choiceP))
  !winner && choiceC && choiceP && setWinner(findWinner(choiceP,choiceC))
  //escolhe pc
  function selectChoieC() {
    const select = Math.floor(Math.random() * 3);
    setChoiceC(optionChoices[select])
  };

  function reset() {
    setChoiceC(undefined)
    setChoiceP(undefined)
    setWinner('')
  };
  function restart() {
    setChoiceC(undefined)
    setChoiceP(undefined)
    setPontC(0)
    setPontP(0)
    setWinner('')
    setPlayerName('')
    setStart(false)
  };

  function findWinner(choiceP, choiceC) {
    if (choiceC.name === choiceP.name) {
      return "empate";
    } else if (choiceP.name === "pedra") {
      if (choiceC.name === "papel") {
        setPontC(pontC + 1)
        return "computer";
      } else {
        setPontP(pontP + 1)
        return playerName;
      }
    } else if (choiceP.name === "papel") {
      if (choiceC.name === "tesoura") {
        setPontC(pontC + 1)
        return "computer";
      } else {
        setPontP(pontP + 1)
        return playerName;
      }
    } else if (choiceP.name === "tesoura") {
      if (choiceC.name === "pedra") {
        setPontC(pontC + 1)
        return "computer";
      } else {
        setPontP(pontP + 1)
        return playerName;
      }
    }
  }
  return (
    <S.Container>
      <S.NameGame>Jokenpô</S.NameGame>
      {!start &&
        <SelectPlayer playerName={playerName} setPlayerName={setPlayerName} setStart={setStart} />
      }
      {start &&
        <S.ContainerPlayers>
          <Player pont={pontP} playerName={playerName} imgChoice={choiceP ? choiceP.image : interroga} />
          <S.ContainerControls>
            {!choiceP && <Choice optionChoices={optionChoices} setChoiceP={setChoiceP} />}
            {winner &&
              <>
                <S.Winner>Vencendor: {winner}</S.Winner>
                <S.ButtonAgain onClick={() => { reset() }}>Tentar Novamente</S.ButtonAgain>
                <S.ButtonNew onClick={() => { restart() }}>novo jogador</S.ButtonNew>
              </>
            }
            {!winner && choiceP && <S.ButtonGo onClick={() => { selectChoieC() }}>Jokenpo!</S.ButtonGo>}
          </S.ContainerControls>
          <Player pont={pontC} playerName="Computer" imgChoice={choiceC ? choiceC.image : interroga} />
        </S.ContainerPlayers>}
    </S.Container>
  )
}