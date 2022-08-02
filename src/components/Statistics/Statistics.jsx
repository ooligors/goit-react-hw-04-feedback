import React from 'react';
import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positiveFeedbacks }) => (
   
    // console.log(Object.keys(options));
    
   
         
        //     <ul>
        //     {Object.keys(options).map(key => { 
        //         return (
        //         <li key={key}>
        //     <span>{key}: {0}</span>
        //   </li>)
        //     })}
        //     </ul>

 
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
                <span className={css.span}>
                    Positive.feedbacks: {positiveFeedbacks}
                </span>
            </li>
        </ul>) 
       