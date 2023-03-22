import React from "react";
import { useGameContext } from "./GameContext";
type Props = {};

const Hangman = (props: Props) => {

	let {lives} = useGameContext()
	return (
		<section>
			{lives}

			<svg
				id="hangman"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 496.95 411"
			>
				<g id="structure">
					<line
						y1="409"
						x2="277"
						y2="409"
						fill="#fff"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>
					<polyline
						points="138.5 409 138.5 2 435 2 435 62"
						fill="#fff"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>
					<line
						x1="138.5"
						y1="65"
						x2="186"
						y2="2"
						fill="#fff"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>
				</g>

				<g id="body">
					{lives < 1 &&<line
						id="right_hand"
						data-name="right hand"
						x1="435"
						y1="234"
						x2="495.5"
						y2="170"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
					{lives < 2 &&<line
						id="left_hand"
						data-name="left hand"
						x1="435"
						y1="234"
						x2="370.5"
						y2="170"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
					{lives < 3 &&<line
						id="right_leg"
						data-name="right leg"
						x1="435"
						y1="289"
						x2="488.5"
						y2="383"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
					{lives < 4 &&<line
						id="left_leg"
						data-name="left leg"
						x1="396.5"
						y1="383"
						x2="435"
						y2="289"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
					{lives < 6 &&<circle
						id="head"
						cx="435.5"
						cy="113"
						r="48"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
					{lives < 5 &&<line
						id="torso"
						x1="435.5"
						y1="161"
						x2="435"
						y2="289"
						fill="none"
						stroke="#231f20"
						strokeMiterlimit="10"
						strokeWidth="4"
					/>}
				</g>
			</svg>
		</section>
	);
};

export default Hangman;
