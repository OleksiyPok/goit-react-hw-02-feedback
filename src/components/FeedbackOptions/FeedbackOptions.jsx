// import PropTypes from 'prop-types';

import {
  Container,
  Title,
  ButtonsContainer,
  Button,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    <Title>Please leave feedback</Title>
    <ButtonsContainer>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </ButtonsContainer>
  </Container>
);

export default FeedbackOptions;
