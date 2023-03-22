import './App.css'
import HangmanStucture from './assets/components/HangmanStucture';
import GameArea from './assets/components/GameArea';
import Letters from './assets/components/Letters';

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
    <main className="App">
      <HangmanStucture/>
      <GameArea/>
      <Letters/>


      
    </main>
  )
}

export default App
