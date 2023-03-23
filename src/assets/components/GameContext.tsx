import React, { useState, useEffect, createContext, useContext } from "react";
import data from "../movies.json";

interface IGameContext {
	secretWord: string;
    setSecretWord?: React.Dispatch<React.SetStateAction<string>>;
	lives:number;
    setLives?:React.Dispatch<React.SetStateAction<number>>;
    setGlobalHolderText?:React.Dispatch<React.SetStateAction<JSX.Element[] | undefined>>;
    GlobalHolderText ?: JSX.Element[];
    gameWon:boolean;
    gameLost:boolean;
    setGameWon?: React.Dispatch<React.SetStateAction<boolean>>
    setGameLost?: React.Dispatch<React.SetStateAction<boolean>>
    getSecretWord?: ()=>string;



}

let GameContext = createContext<IGameContext>({secretWord:"", lives:6 , gameWon:false, gameLost:false})

export function useGameContext() {
	return useContext(GameContext);
}

type Props = {
    children:  React.ReactNode
};

const GameContextProvider = ({ children }: Props) => {
	// main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    // JSX.IntrinsicElements.main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

	let [secretWord, setSecretWord] = useState<string>("");
	let [lives, setLives] = useState<number>(6);
	let [GlobalHolderText, setGlobalHolderText] = useState<JSX.Element[]>();
    let [gameWon, setGameWon] =useState<boolean>(false)
    let [gameLost, setGameLost] =useState<boolean>(false)


    function getSecretWord(){

        return data[Math.floor(Math.random() * (99 - 0)) + 0].title.toUpperCase()

    }

	useEffect(() => {
		setSecretWord(
			// data[Math.floor(Math.random() * (99 - 0)) + 0].title.toUpperCase()
            getSecretWord()
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
                        &nbsp; &nbsp; / &nbsp; &nbsp;
                     
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
		<GameContext.Provider value={{ secretWord, lives, setLives, setGlobalHolderText, GlobalHolderText, gameWon, gameLost, setGameLost, setGameWon, getSecretWord, setSecretWord }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
