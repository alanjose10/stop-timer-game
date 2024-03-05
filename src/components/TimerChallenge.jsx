import { useRef, useState } from "react"
import ResultModal from "./ResultModal";



export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        setTimerStarted(false);
        clearTimeout(timer.current);
    }

    let paraBaseClass = "uppercase"
    if (timerStarted) {
        paraBaseClass += " animate-flash"
    } 

    return (<>
            {timerExpired && <ResultModal result="lost" targetTime={targetTime}></ResultModal>}
            <section className="w-[22rem] flex flex-col items-center justify-center text-[#221c18] bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-md rounded-md mx-auto my-8 p-8">
                <h2 className="uppercase text-2xl tracking-[.4em] m-0">
                    {title}
                </h2>
                <p className="border border-slate-800 text-xl px-2 m-2">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button 
                        className="border-none my-4 px-2 py-4 rounded-md bg-slate-800 hover:bg-slate-950 text-[#edfcfa] text-base cursor-pointer"
                        onClick={ timerStarted ? handleStop : handleStart }
                    >
                        {timerStarted?'Stop':'Start'} Challenge
                    </button>
                </p>
                <p className={paraBaseClass}>
                    {timerStarted?'Time is running...':'Timer inactive'}
                </p>
            </section>
        </>
    )
}