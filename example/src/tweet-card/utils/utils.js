import React from 'react';
import styles from '../styles.module.css'

export function styleNumber(num) {
    let div = num / 1000000
    if (div >= 1) {
      return (
        div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1') + 'M'
      )
    }
    div = num / 1000
    if (div >= 1) {
      return (
        div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1') + 'K'
      )
    }
    return num
}



export function convertToBlue(text){
    // Split the text by space to get individual words
    const words = text.split(/\s/);
    
    // Map through the words and wrap hashtags and mentions in a span with the blue-text class
    const processedWords = words.map(word => {
      if (word.startsWith('#') || word.startsWith('@')) {
        return <span className={styles["blue-text"]}>{word} </span>;
      }
      return word + ' ';
    });
    
    // Return the processed text
    return <>{processedWords}</>;
  };
  