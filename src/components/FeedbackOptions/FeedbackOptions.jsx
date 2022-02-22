import { StyledButton, ButtonWrapper } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => (
        <StyledButton onClick={onLeaveFeedback} key={option}>
          {option}
        </StyledButton>
      ))}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
