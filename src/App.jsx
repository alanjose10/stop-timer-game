import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div className='w-full max-w-[50rem] mx-auto my-12 flex flex-row flex-wrap gap-8 justify-center py-8'>
        <TimerChallenge title="easy" targetTime={2}></TimerChallenge>
        <TimerChallenge title="medium" targetTime={10} isActive={true}></TimerChallenge>
        <TimerChallenge title="hard" targetTime={15} isActive={true}></TimerChallenge>
        <TimerChallenge title="very hard" targetTime={25}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
