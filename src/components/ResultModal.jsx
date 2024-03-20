import { forwardRef, useRef, useImperativeHandle } from "react"

const ResultModal = forwardRef(({ targetTime, timeRemaining, onReset }, ref) => {

    const dialogRef = useRef();

    const userLost = timeRemaining <= 0;
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    });

    return <dialog ref={dialogRef} className="result-modal rounded-md bg-blue-100 border-none p-8 animate-slide-in-from-top" onClose={onReset}>
        <h2 className="font-handjet uppercase text-6xl m-0 font-extrabold">You {userLost ? 'lost  :(' : `won, score: ${score}` }</h2>
        <p className="results-para">The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
        <p className="results-para">You stopped the timer with <strong>{(timeRemaining / 1000).toFixed(2)} seconds left.</strong></p>
        <form className="text-right mt-8" method="dialog" >
            <button className="results-button">Close</button>
        </form>
    </dialog>
});

export default ResultModal;