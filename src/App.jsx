import pedra from "./assets/pedra.png"
import Player from "./components/Player"
function App() {
  return (
    <>
     <h1>Jokenpô</h1>
     <Player playeName={"Player1"} imgChoice={pedra} />  
    </>
  )
}

export default App
