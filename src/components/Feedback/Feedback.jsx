import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={() => console.log('Good')}>
          Good
        </button>
        <button type="button" onClick={() => console.log('Neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => console.log('Bad')}>
          Bad
        </button>
      </div>
    );
  }
}
