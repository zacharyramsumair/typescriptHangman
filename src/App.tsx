import './App.css'
import HangmanStucture from './assets/components/HangmanStucture';
import GameArea from './assets/components/GameArea';
import Letters from './assets/components/Letters';
import React , {useState, createContext, useEffect} from 'react';
import data from "./assets/movies.json"

interface IGameContext {
  secretWord:string;
  lives:number;
}


export let GameContext = createContext<IGameContext>({secretWord:"THE SECRET", lives:6})


function App() {
  //things to go in context: secretWord, lives


  // get a random movie to guess
  // display it as a set of dashes and put the entire handman img there
  // make letters 
  // make letters enter into the dashes if correct and fade it not
  // if wrong, add body part
  // if all body parts then die, and you lose
  // if you get it right before you lose all your body parts, you win and play again button


  let [secretWord, setSecretWord] = useState<string>("");

	useEffect(() => {
		setSecretWord(data[Math.floor(Math.random() * (99 - 0)) + 0].title.toUpperCase());
	}, []);

  return (
    <GameContext.Provider value={{ secretWord:secretWord, lives:6 }}>
    <main className="App">
      <HangmanStucture/>
      <GameArea/>
      <Letters/>  
    </main>
    </GameContext.Provider>

  )
}

export default App
