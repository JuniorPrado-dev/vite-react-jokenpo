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
  const [start,setStart]=useState(false);
  
  const [choiceP, setChoiceP] = useState(undefined)
  const [choiceC, setChoiceC] = useState(undefined)
  const [playerName, setPlayerName] = useState('')
  const [winner,setWinner]=useState(undefined)  
  
  //opções
  const optionChoices = [
    { name: "pedra", image: pedra },
    { name: "papel", image: papel },
    { name: "tesoura", image: tesoura },
  ]
  choiceP&&choiceC&&console.log(choiceWinner(choiceP, choiceC));
  
  //escolhe pc
  function selectChoieC() {
    let i = 0
    const repet = setInterval(() => {
      const select = Math.floor(Math.random() * 3);
      setChoiceC(optionChoices[select])
      i++;
      if (i > 5) {
        if (!winner&&choiceC && choiceP){
          setWinner(choiceWinner(choiceP,choiceC));
        }
        clearInterval(repet);
      }
    }, 250);
  };

  function choiceWinner(choiceP, choiceC) {
    if (choiceC.name === choiceP.name) {
      return"empate";
    } else if (choiceP.name === "pedra") {
      if (choiceC.name === "papel") {
        return"computer";
      } else {
        return"Player";
      }
    } else if (choiceP.name === "papel") {
      if (choiceC.name === "tesoura") {
        return"computer";
      } else {
        return"Player";
      }
    } else if (choiceP.name === "tesoura") {
      if (choiceC.name === "pedra") {
        return"computer";
      } else {
        return"Player";
      }
    }
  }
  return (
    <S.Container>
      <S.NameGame>Jokenpô</S.NameGame>  
      {!start&&
      <SelectPlayer playerName={playerName} setPlayerName={setPlayerName} setStart={setStart}/>
      }
      {start&&
      <S.ContainerPlayers>
        <Player playerName={playerName} imgChoice={choiceP ? choiceP.image : interroga} />
        {!choiceP && <Choice optionChoices={optionChoices} setChoiceP={setChoiceP} />}
        {choiceP && <S.ButtonGo onClick={selectChoieC}>Jokenpo!</S.ButtonGo>}
        <Player playeName={"Computer"} imgChoice={choiceC ? choiceC.image : interroga} />
      </S.ContainerPlayers>}
    </S.Container>
  )
}