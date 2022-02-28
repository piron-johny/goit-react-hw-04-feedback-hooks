import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const nameButton = ['Good', 'Neutral', 'Bad'];

  const onLeaveFeedback = e => {
    const name = e.currentTarget.innerText;
    if (name === 'Good') {
      setGood(good + 1);
    }
    if (name === 'Neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good / countTotalFeedback()) * 100);
    return positiveFeedback;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={nameButton}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   nameButton = ['Good', 'Neutral', 'Bad'];

//   onLeaveFeedback = e => {
//     const name = e.currentTarget.innerText.toLowerCase();
//     return this.setState({ [name]: this.state[name] + 1 });
//   };

//   countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce(
//       (acc, item) => (acc += item),
//       0
//     );
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const stateGood = this.state.good;
//     const positiveFeedback = Math.round(
//       (stateGood / this.countTotalFeedback()) * 100
//     );
//     return positiveFeedback;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.nameButton}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 && (
//             <Notification message="There is no feedback" />
//           )}
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </>
//     );
//   }
// }
