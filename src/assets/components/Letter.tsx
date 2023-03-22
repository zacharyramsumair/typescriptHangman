import React from "react";
import { useGameContext } from "./GameContext";
import { IUsed } from "./Letters";
interface Props {
	letter: string;
	key: number;
  used: IUsed[];
  setUsed: React.Dispatch<React.SetStateAction<string[]>>;
}

const Letter = (props: Props) => {
	let {
		secretWord,
		lives,
    setLives,
		GlobalHolderText,
		setGlobalHolderText,
	} = useGameContext();

	function checkChoice() {

    
    for(let char of props.used){
      if(char.letter == props.letter){
        return;
      }
    }



      if(lives >0){
        if (secretWord.includes(props.letter)) {
          let indexes: number[] = [];
          for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] == props.letter) indexes.push(i);
          }
    
          if (GlobalHolderText != null && GlobalHolderText != undefined) {
            let updatedHolderText = GlobalHolderText.map(
              (char, index: number) => {
                if (indexes.includes(index)) {
                  return {
                    ...char,
                    props: { ...char.props, children: props.letter },
                  };
                } else {
                  return char;
                }
              }
            );
    
            setGlobalHolderText(updatedHolderText);
            props.setUsed(prev => [...prev,{ letter:props.letter , correct:true}])

    
          }
        }else{
          setLives(prev => prev -1)
          props.setUsed(prev => [...prev,{ letter:props.letter , correct:false}])

    
        }

        // props.setUsed(prev => [...prev,{ letter:props.letter , correct:true}])
      }


    // console.log(props.used)
 


	}

  let usedClass ="letter"
  for(let char of props.used){
    if(char.letter == props.letter){

      if(char.correct){
        usedClass = "letter usedCorrect"
      }else{
        usedClass = "letter usedInCorrect"

      }
    }
  }

	return (
		<div className={usedClass} onClick={checkChoice}>
			{props.letter}
		</div>
	);
};

export default Letter;
