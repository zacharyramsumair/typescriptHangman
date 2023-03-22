import React, {  useContext } from "react";
// import { GameContext } from "../../App";
import { useGameContext } from "./GameContext";
type Props = {};

const GameArea = (props: Props) => {
	let {secretWord, lives , GlobalHolderText:holderText,} = useGameContext()





	return (
		<section className="gameArea">
			{/* <p>GameArea</p> */}
			{/* <p>{secretWord}</p> */}
			<p className="secret">{holderText}</p>
		</section>
	);

	return <p>game Area</p>
};

export default GameArea;
