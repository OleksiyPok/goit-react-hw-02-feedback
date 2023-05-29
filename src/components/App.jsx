import { Component } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback(this.state);
    const { Good } = this.state;
    const result = Math.round((Good / total) * 100);
    return !result ? 0 : result;
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const isFeedback = Boolean(totalFeedback);
    return (
      <div>
        <h1>Feedback form</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        {isFeedback ? (
          <Section title="Statistics">
            <Statistics
              Good={this.state.Good}
              Neutral={this.state.Neutral}
              Bad={this.state.Bad}
              total={totalFeedback}
              positivPercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
