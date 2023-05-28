// import css from './Statistics.module.css';
import { Container, Title, StateList, StateItem } from './Statistics.styled';

const Statistics = ({ Good, Neutral, Bad, total, positivPercentage = 0 }) => (
  <Container>
    <Title>Statistics</Title>
    <StateList>
      <StateItem>Good: {Good}</StateItem>
      <StateItem>Neutral: {Neutral}</StateItem>
      <StateItem>Bad: {Bad}</StateItem>
      <StateItem>Total: {total}</StateItem>
      <StateItem>Positive feedback: {positivPercentage}%</StateItem>
    </StateList>
  </Container>
);

export default Statistics;
