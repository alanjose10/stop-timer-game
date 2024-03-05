

export default function ResultModal({ result, targetTime }) {
    return <dialog className="result-modal rounded-md bg-blue-100 border-none p-8 animate-slide-in-from-top" open>
        <h2 className="font-handjet uppercase text-5xl m-0">You {result}!</h2>
        <p>The target time was <string>{targetTime} second{targetTime > 1 ? 's' : ''}</string></p>
        <p>You stopped the timer with <string>X seconds left.</string></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}