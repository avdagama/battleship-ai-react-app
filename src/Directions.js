function Directions({ onDonePlacingShipsClick }) {
    
    return (
        <div style={{textAlign: 'center', width: 30+'vw', margin: 'auto 0'}}>
            <p>Your goal is to sink all of the AI's ships before it can sink yours.</p>
            <p>To start, place the following ships horizontally or verically by clicking cells on the grid:</p>
            <p>
            Carrier (5 spaces)<br/>
            Battleship (4 spaces)<br/>
            Cruiser (3 spaces)<br/>
            Submarine (3 spaces)<br/>
            Destroyer (2 spaces)
            </p>
            <button onClick={onDonePlacingShipsClick} className={'button'}>I'm done placing my ships</button>
        </div>
    );
  }
  
  export default Directions;




