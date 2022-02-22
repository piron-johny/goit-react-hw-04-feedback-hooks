import PropTypes from 'prop-types';
import { StyledSection, StyledContainer } from './Section.styles';

const Section = ({
  title,
  children
}) => {
  return (
    <StyledSection>
      <StyledContainer>
        <h2>{title}</h2>
        {children}
      </StyledContainer>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
