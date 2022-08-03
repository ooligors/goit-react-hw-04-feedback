import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbacks,
}) => (
  <ul className={css.ul}>
    <li>
      <span className={css.span}>Good: {good}</span>
    </li>
    <li>
      <span className={css.span}>Neutral: {neutral}</span>
    </li>
    <li>
      <span className={css.span}>Bad: {bad}</span>
    </li>
    <li>
      <span className={css.span}>Total: {total}</span>
    </li>
    <li>
      <span className={css.span}>Positive.feedbacks: {positiveFeedbacks}</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};
