import { Component } from 'react';

import Feedback from 'components/Feedback';
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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback />
        <Statistics
          goodState={this.state.good}
          neutralState={this.state.neutral}
          badState={this.state.bad}
        />
      </div>
    );
  }
}
