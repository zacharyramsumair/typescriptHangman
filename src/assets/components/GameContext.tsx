import React, { useState, useEffect, createContext, useContext } from "react";
import data from "../movies.json";

interface IGameContext {
	secretWord: string;
	lives: number;
    setLives?:any;
    setGlobalHolderText?:any;
    GlobalHolderText ?: JSX.Element[];
}

// let GameContext = createContext<IGameContext>({
// 	secretWord: "THE SECRET",
// 	lives: 6,
// });

let GameContext = createContext<IGameContext>({secretWord:"", lives:-1})

export function useGameContext() {
	return useContext(GameContext);
}

type Props = {};

const GameContextProvider = ({ children }) => {
	// main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

	let [secretWord, setSecretWord] = useState<string>("");
	let [lives, setLives] = useState<number>(6);
	let [GlobalHolderText, setGlobalHolderText] = useState<JSX.Element[]>();

	useEffect(() => {
		setSecretWord(
			data[Math.floor(Math.random() * (99 - 0)) + 0].title.toUpperCase()
		);
	}, []);

	

    		// setGlobalHolderText(holderText);


	useEffect(() => {
        let holderText = [...secretWord].map((char: string, key: number) => {
            if (char.match(/[a-z]/i)) {
                return (
                    <span className="secretSpot" key={key}>
                        &nbsp;
                        {/* {char} */}
                    </span>
                );
            }
    
            if (char == " ") {
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
		setGlobalHolderText(holderText);
	}, [secretWord]);


    // function updateHolderText(char:string){

    // }

	return (
		<GameContext.Provider value={{ secretWord, lives, setLives, setGlobalHolderText:setGlobalHolderText, GlobalHolderText }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
