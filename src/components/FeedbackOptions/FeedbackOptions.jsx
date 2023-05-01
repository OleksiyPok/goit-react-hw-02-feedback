import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <div className={css.feedbackOptions}>
    <span>Please leave feedback</span>

    <div className={css.buttonsContainer}>
      <button className={css.button} type="button" onClick={goodIncrement}>
        Good
      </button>
      <button className={css.button} type="button" onClick={neutralIncrement}>
        Neutral
      </button>
      <button className={css.button} type="button" onClick={badIncrement}>
        Bad
      </button>
    </div>
  </div>
);

export default FeedbackOptions;
