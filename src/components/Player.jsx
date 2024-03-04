import { useState, useRef } from "react";
import { convertToUpper } from "../utils/string";

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerInput = useRef();

  const handleClick = () => {
    if (playerInput.current.value !== "") {
      setEnteredPlayerName(convertToUpper(playerInput.current.value));
      playerInput.current.value = "";
    } else {
      setEnteredPlayerName(null);
    }
  }
  
  return (
    <section className="text-center" id="player">
      <h2 className="text-[#54a399] text-xl my-4">Welcome {enteredPlayerName ?? "unknown entity"}!</h2>
      <p className="flex justify-center items-center">
        <input 
          type="text"
          className="text-[#d1f0ec] border border-dotted border-[#54a399] bg-[#192f2b] rounded rounded-tr-none rounded-br-none p-1 uppercase"
          placeholder="Enter name"
          ref={playerInput}
        />
        <button 
          className="cursor-pointer bg-[#54a399] hover:bg-[#3c8379] hover:border-[#3c8379] border border-solid border-[#54a399] px-4 py-[0.4rem] text-[#061e1a] rounded-tr-md rounded-br-md"
          onClick={handleClick}
        >Set Name
        </button>
      </p>
    </section>
  );
}
