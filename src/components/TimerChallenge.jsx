import { useRef, useState } from "react"
import ResultModal from "./ResultModal";



export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialogRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsRunning = (timeRemaining > 0) && (timeRemaining < (targetTime * 1000));

    if ( timeRemaining <= 0 ){
        clearInterval(timer.current);
        
        dialogRef.current.open();
    }

    const handleTimerReset = () => {
        setTimeRemaining(targetTime * 1000);
    }


    function handleStart() {
        // setTimerStarted(true);
        timer.current = setInterval(() => {
            setTimeRemaining((prev) => prev - 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    let paraBaseClass = "uppercase"
    if (timerIsRunning) {
        paraBaseClass += " animate-flash"
    } 

    return (<>
            <ResultModal ref={dialogRef} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleTimerReset}></ResultModal>
            <section className="w-[22rem] h-[18rem] flex flex-col items-center justify-center text-[#221c18] bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-md rounded-md mx-auto my-8 p-8">
                <h2 className="uppercase text-2xl tracking-[.4em] m-0">
                    {title}
                </h2>
                <p className="border border-slate-800 text-xl px-2 m-2">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button 
                        className="border-none my-4 px-2 py-4 rounded-md bg-slate-800 hover:bg-slate-950 text-[#edfcfa] text-base cursor-pointer"
                        onClick={ timerIsRunning ? handleStop : handleStart }
                    >
                        {timerIsRunning ? 'Stop':'Start'} Challenge
                    </button>
                </p>
                <p className={paraBaseClass}>
                    { timerIsRunning ? 'Time is running...' : '' }
                </p>
            </section>
        </>
    )
}