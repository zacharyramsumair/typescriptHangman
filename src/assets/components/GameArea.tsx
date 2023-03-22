import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../App";
type Props = {};

const GameArea = (props: Props) => {
	let {secretWord, lives} = useContext(GameContext)

	console.log(secretWord + " are here")
	console.log(lives + " are here")

	let holderText = [...secretWord].map((char: string, key: number) => {
		if (char.match(/[a-z]/i)) {
			return (
				<span className="secretSpot" key={key}>
					{/* &nbsp; */}
          {char}
				</span>
			)
		} 

    if (char == " "){
      return (
				<span className="secretContained" key={key}>
				&nbsp; &nbsp; &nbsp;
				</span>
			);
    }
    
   
			return (
				<span className="secretContained" key={key}>
					{char}
				</span>
			);
		
	});



	return (
		<section className="gameArea">
			<p>GameArea</p>
			<p>{secretWord}</p>
			<p className="secret">{holderText}</p>
		</section>
	);

	return <p>game Area</p>
};

export default GameArea;
