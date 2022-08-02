import React from 'react';
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

 
        <ul>
            <li>
                <span>Good: {good}</span>
            </li>
            <li>
                <span>Neutral: {neutral}</span>
            </li>
            <li>
                <span>Bad: {bad}</span>
            </li>
            <li>
                <span>Total: {total}</span>
            </li>
            <li>
                <span>
                    Positive.feedbacks: {positiveFeedbacks}
                </span>
            </li>
        </ul>) 
       