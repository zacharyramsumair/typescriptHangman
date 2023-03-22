import React, { useState, useEffect } from "react";
import Letter from "./Letter";
import { useGameContext } from "./GameContext";

export interface IUsed {
	letter: string;
	correct: boolean;
}

const Letters = () => {
	let [used, setUsed] = useState<IUsed[]>([]);
	const caps: string[] = [...Array(26)].map((val, i) =>
		String.fromCharCode(i + 65)
	);
	let letterElements: JSX.Element[] = caps.map(
		(letter: string, index: number) => {
			return (
				<Letter letter={letter} key={index} used={used} setUsed={setUsed} />
			);
		}
	);

	let { secretWord } = useGameContext();

	useEffect(() => {
    setUsed([])
  }, [secretWord]);

	return <section className="letters">{letterElements}</section>;
};

export default Letters;
