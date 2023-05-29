import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ Good, Neutral, Bad, total, positivPercentage = 0 }) => (
  <StatisticsList>
    <StatisticsItem>Good: {Good}</StatisticsItem>
    <StatisticsItem>Neutral: {Neutral}</StatisticsItem>
    <StatisticsItem>Bad: {Bad}</StatisticsItem>
    <StatisticsItem>Total: {total}</StatisticsItem>
    <StatisticsItem>Positive feedback: {positivPercentage}%</StatisticsItem>
  </StatisticsList>
);

export default Statistics;

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
