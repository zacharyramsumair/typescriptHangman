import React ,{useState, useEffect} from "react";
import { useGameContext } from "./GameContext";

type Props = {};

const Endscreen = (props: Props) => {
	let { lives, secretWord, GlobalHolderText, gameWon, gameLost, setGameLost, setGameWon, setSecretWord,getSecretWord, setLives} = useGameContext();

    //move these to global and check to see if T , aand if T the don't allow ppl to press buttons
  

    useEffect(()=>{
    
        if (GlobalHolderText != null && GlobalHolderText != undefined) {
            let stringHolderText = ""
            for (let char of GlobalHolderText){
            stringHolderText +=char.props.children
            }
            stringHolderText = stringHolderText.replace(/\s/g, "")
            secretWord = secretWord.replace(/\s/g, "")
          
            if(stringHolderText==secretWord){
                if(setGameWon !=undefined){
                    setGameWon(true)
                }
            }
        }


    },[GlobalHolderText])


    useEffect(()=>{
        if(lives == 0){
            if(setGameLost !=undefined){
                setGameLost(true)
            }
        }
    })
    
    if (GlobalHolderText != null && GlobalHolderText != undefined) {
        let stuff = ""
        for (let char of GlobalHolderText){
        stuff +=char.props.children
        }
        console.log(stuff)
  

    }

    function resetGame(){
        if(setSecretWord != undefined && getSecretWord != undefined && setGameLost && setGameWon && setLives){
            setSecretWord(getSecretWord())
            setGameLost(false)
            setGameWon(false)
            setLives(6)

        }
    }

    if (gameLost || gameWon){
        return <div className="endScreen">
            <p>{gameWon ? "You Win" : "You Lose"}</p>
            <button onClick={resetGame}>Play Again</button>
        </div>
    }

    // if (gameWon){
    //     return <div>You Win</div>
    // }
};

export default Endscreen;
