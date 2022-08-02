import React from 'react';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={onLeaveFeedback}>
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