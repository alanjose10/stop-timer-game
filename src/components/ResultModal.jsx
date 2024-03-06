import { forwardRef } from "react"

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    return <dialog ref={ref} className="result-modal rounded-md bg-blue-100 border-none p-8 animate-slide-in-from-top">
        <h2 className="font-handjet uppercase text-6xl m-0 font-extrabold">You {result}!</h2>
        <p className="results-para">The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
        <p className="results-para">You stopped the timer with <strong>X seconds left.</strong></p>
        <form className="text-right mt-8" method="dialog">
            <button className="results-button">Close</button>
        </form>
    </dialog>
});

export default ResultModal;