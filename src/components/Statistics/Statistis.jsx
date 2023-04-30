const Statistics = ({ goodState, neutralState, badState }) => (
  <div>
    <span>Statistics</span>
    <ul>
      <li>Good: {goodState}</li>
      <li>Neutral: {neutralState}</li>
      <li>Bad: {badState}</li>
    </ul>
  </div>
);

export default Statistics;
