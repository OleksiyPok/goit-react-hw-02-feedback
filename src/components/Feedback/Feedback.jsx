const Feedback = ({ onGood, onNeutral, onBad }) => (
  <div>
    <span>Please leave feedback</span>
    <button type="button" onClick={onGood}>
      Good
    </button>
    <button type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Feedback;
