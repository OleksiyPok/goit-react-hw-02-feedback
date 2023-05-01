import css from './Statistics.module.css';

const Statistics = ({ goodState, neutralState, badState }) => (
  <div className={css.Statistics}>
    <span>Statistics</span>

    <ul className={css.stateList}>
      <li className={css.stateItem}>Good: {goodState}</li>
      <li className={css.stateItem}>Neutral: {neutralState}</li>
      <li className={css.stateItem}>Bad: {badState}</li>
    </ul>
  </div>
);

export default Statistics;
