import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    countTotalFeedback = () => {
        const total = Object.values(this.state);
        return total.reduce((total, el) => total + el, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Math.round((good / total) * 100);
    };

    handleFeedback = e => {
        const target = e.currentTarget.dataset.action;
        this.setState(prevState => ({
            [target]: prevState[target] + 1,
        }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        const isFeedbackGiven = good > 0 || neutral > 0 || bad > 0;

        return (
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={this.state}
                    onLeaveFeedback={this.handleFeedback}
                />

                <Section title="Statistics">
                    {isFeedbackGiven ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </Section>
        );
    }
}