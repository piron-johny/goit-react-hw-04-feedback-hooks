import { Paragraph } from './Statistics.styles';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    total !== 0 && (
      <>
        <Paragraph>Good: <b>{good}</b></Paragraph>
        <Paragraph>Neutral: <b>{neutral}</b></Paragraph>
        <Paragraph>Bad: <b>{bad}</b></Paragraph>
        <Paragraph>Total: <b>{total}</b></Paragraph>
        <Paragraph>
          Positive feedback: <b>{total === 0 ? 0 : positivePercentage} %</b>
        </Paragraph>
      </>
    )
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,

}

export default Statistics;
