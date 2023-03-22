import './App.css'
import HangmanStructure from './assets/components/HangmanStructure';
import GameArea from './assets/components/GameArea';
import Letters from './assets/components/Letters';
import GameContextProvider from './assets/components/GameContext';
import Endscreen from './assets/components/Endscreen';


function App() {
  //things to go in context: secretWord, lives


  // get a random movie to guess
  // display it as a set of dashes and put the entire handman img there
  // make letters 
  // make letters enter into the dashes if correct and fade it not
  // if wrong, add body part
  // if all body parts then die, and you lose
  // if you get it right before you lose all your body parts, you win and play again button



  return (
    <GameContextProvider>
    <main className="App">
      <HangmanStructure/>
      <GameArea/>
      <Letters/>
      <Endscreen/>
    </main>
    </GameContextProvider>

  )
}

export default App
