import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
// import Section from 'components/Section';

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
    console.log('options:', options);

    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          Good={this.state.Good}
          Neutral={this.state.Neutral}
          Bad={this.state.Bad}
          total={totalFeedback}
          positivPercentage={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}
