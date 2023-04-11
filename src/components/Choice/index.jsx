import { useState } from "react"
import * as S from "./style"
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"

export default function Choice({ optionChoices, setChoiceP }) {
  return (

    <S.Container>
      <S.ContainerChoice>
        <S.ImageChoice onClick={() => setChoiceP(optionChoices[0])} src={pedra} />
        <S.ImageChoice onClick={() => setChoiceP(optionChoices[1])} src={papel} />
        <S.ImageChoice onClick={() => setChoiceP(optionChoices[2])} src={tesoura} />
      </S.ContainerChoice>
    </S.Container>
  )
}