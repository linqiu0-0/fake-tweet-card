import React from 'react';
import styles from '../styles.module.css'
import processString from 'react-process-string';
import cs from 'classnames'

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

export function convertToBlue(text) {

  // Define the array of processors
  const config = [
    {
      regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,
      fn: (key, result) => (
        <span key={key}>
          {' '}
          <span className={cs(styles.link, styles.mention)}>
            @{result[1]}
          </span>
        </span>
      )
    },
    {
      regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
      fn: (key, result) => (
        <span key={key}>
          {' '}
          <span className={cs(styles.link, styles.mention)}>
            #{result[1]}
          </span>
        </span>
      )
    },
    {
      regex: /(\bhttps?:\/\/\S+\b)/g,
      fn: (key, result) => (
        <span key={key}>
          {' '}
          <span className={cs(styles.link, styles.mention)} target="_blank" rel="noopener noreferrer">
            {result[0]}
          </span>
        </span>
      )
    },
    {
      regex: /(\bhttp?:\/\/\S+\b)/g,
      fn: (key, result) => (
        <span key={key}>
          {' '}
          <span className={cs(styles.link, styles.mention)} target="_blank" rel="noopener noreferrer">
            {result[0]}
          </span>
        </span>
      )
    }
  ];

  // Use processString to format the text based on the config
  return processString(config)(text);
}