import React, { useState, useEffect } from "react";
import data from "../../assets/movies.json";

type Props = {};

const GameArea = (props: Props) => {
	let [secretWord, setSecretWord] = useState<string>("");
	useEffect(() => {
		setSecretWord(data[Math.floor(Math.random() * (99 - 0)) + 0].title.toUpperCase());
	}, []);

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
};

export default GameArea;
