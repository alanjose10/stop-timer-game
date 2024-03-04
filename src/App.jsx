import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div className='w-full max-w-3xl border'>
        <TimerChallenge title="easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="medium" targetTime={10}></TimerChallenge>
        <TimerChallenge title="hard" targetTime={15}></TimerChallenge>
        <TimerChallenge title="very hard" targetTime={25}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
