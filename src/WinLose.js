function WinLose({ didUserWin, onPlayAgainClick }) {

    return (
        <div className={'grow'} style={{margin: 60, textAlign: 'center'}}>
            <h2>{didUserWin ? 'You won!' : 'You lost!'}</h2>
            <button onClick={onPlayAgainClick} className={'button'}>Play again</button>
        </div>
    );
  }
  
  export default WinLose;