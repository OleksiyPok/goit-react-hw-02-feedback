import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badIncrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countPositiveFeedbackPercentage = () => {};

  countTotalFeedback = () => {};

  render() {
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
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
        />
        <Statistics
          goodState={this.state.good}
          neutralState={this.state.neutral}
          badState={this.state.bad}
        />
      </div>
    );
  }
}
