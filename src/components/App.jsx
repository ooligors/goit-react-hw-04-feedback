import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
 static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

   onIncreaseFeedback = e => {
    const feedback = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) + '%'
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          backgroundColor: '#c3edf7',
        }}
      >
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.onIncreaseFeedback}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positiveFeedbacks={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <p>There is no feedback</p>
             )
          }
        /> 
      </div>
    );
  }
}

  
