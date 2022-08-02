import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <ul className={css.ul}>
      {options.map(option => {
        return (
          <li className={css.li} key={option}>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );

  // (
  //     <ul>
  //       <li>
  //         <button type="button" onClick={onIncreaseFeedback}>
  //           <span>Good</span>
  //         </button>
  //       </li>
  //       <li>
  //         <button type="button" onClick={onIncreaseFeedback}>
  //           <span>Neutral</span>
  //         </button>
  //       </li>
  //       <li>
  //         <button type="button" onClick={onIncreaseFeedback}>
  //           <span>Bad</span>
  //         </button>
  //       </li>
  //     </ul>
  // )
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};