import React from "react";
import { useGameContext } from "./GameContext";

interface Props {
	letter: string;
	key: number;
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
  
        }
      }else{
        setLives(prev => prev -1)
  
      }
    }
		
	}

	return (
		<div className="letter" onClick={checkChoice}>
			{props.letter}
		</div>
	);
};

export default Letter;
