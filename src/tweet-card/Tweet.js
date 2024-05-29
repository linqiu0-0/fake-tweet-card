import React, { useState, useEffect } from 'react'
import processString from 'react-process-string'
import dayjs from 'dayjs'
import cs from 'classnames'
import { Tooltip } from '@mui/material';

import styles from './styles.module.css'
import HoverAvatar from './HoverAvatar';
import { styleNumber } from './utils/utils'
import ImagePreview from './ImagePreview'


function renderDate(date) {
  return dayjs(date).format('h:mm A · MMMM D, YYYY')
}

const verifiedIcon = (
  <div className={styles.icon}>
    <svg
      viewBox='0 0 24 24'
      aria-label='Verified account'
      className={styles['verified-icon-svg']}
    >
      <g>
        <path d='M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z' />
      </g>
    </svg>
  </div>
)

const lockIcon = (
  <div className={styles.icon}>
    <svg
      viewBox='0 0 24 24'
      aria-label='Locked account'
      className={styles['lock-icon-svg']}
    >
      <g>
        <path d='M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z' />
      </g>
    </svg>
  </div>
)

const CommentAction = ({ comment_count }) => (
  <Tooltip title="Reply" slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-25, -14],
          },
        },
      ],
    },
  }}>

    <div className={cs(styles['bottom-button'], styles.blue)}>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* This ensures flex layout */}

        <svg viewBox='0 0 24 24' style={{ marginRight: '0px' }}> {/* Add some margin to the right of the SVG */}
          <g>
            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
          </g>
        </svg>
        <span className={cs(styles['bottom-info'])}>
          {styleNumber(comment_count)}
        </span>

      </div>
    </div>
  </Tooltip>

);

const RetweetAction = ({ retweet_count }) => (
  <Tooltip title="Repost" slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-20, -14],
          },
        },
      ],
    },
  }}>
    <div className={cs(styles['bottom-button'], styles.green)}>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* This ensures flex layout */}
        <svg viewBox='0 0 24 24' style={{ marginRight: '0px' }}> {/* Add some margin to the right of the SVG */}
          <g>
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
          </g>
        </svg>
        <span className={cs(styles['bottom-info'])}>
          {styleNumber(retweet_count)}
        </span>
      </div>
    </div>
  </Tooltip>

);

const FavoriteAction = ({ favorite_count }) => (
  <Tooltip title="Like" slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-27, -14],
          },
        },
      ],
    },
  }}>
    <div className={cs(styles['bottom-button'], styles.red)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg viewBox='0 0 24 24' style={{ marginRight: '0px' }}>
          <g>
            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
          </g>
        </svg>
        <span className={cs(styles['bottom-info'])}>
          {styleNumber(favorite_count)}
        </span>
      </div>
    </div>
  </Tooltip>
);

const shareAction = (
  <Tooltip title="Share" slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-25, -14],
          },
        },
      ],
    },
  }}>
    <div className={cs(styles['bottom-button'], styles.blue)}>
      <div>
        <svg viewBox='0 0 24 24'>
          <g>
            <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
          </g>
        </svg>
      </div>
    </div>
  </Tooltip>
)



const BookmarkAction = ({ bookmark_count }) => (
  <Tooltip title="Bookmark" slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-20, -14],
          },
        },
      ],
    },
  }}>
    <div className={cs(styles['bottom-button'], styles.blue)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg viewBox='0 0 24 24' style={{ marginRight: '0px' }}>
          <g>
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
          </g>
        </svg>
        <span className={cs(styles['bottom-info'])}>
          {styleNumber(bookmark_count)}
        </span>
      </div>
    </div>
  </Tooltip>
);
export function Tweet(props) {
  const { config = {}, className, ...rest } = props
  const [text, setText] = useState(config.text)

  useEffect(() => {
    setText(
      processString([
        {
          regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,
          fn: (key, result) => {
            return (
              <span key={key}>
                {' '}
                <span className={cs(styles.link, styles.mention)}>
                  @{result[1]}
                </span>
              </span>
            )
          }
        },
        {
          regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
          fn: (key, result) => {
            return (
              <span key={key}>
                {' '}
                <span className={cs(styles.link, styles.mention)}>
                  #{result[1]}
                </span>
              </span>
            )
          }
        },
        // {
        //   regex: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
        //   fn: (key, result) => {
        //     return (
        //       <Twemoji
        //         key={key}
        //         options={{ className: styles['twemoji-bg'] }}
        //         style={{ display: 'inline' }}
        //       >
        //         {result[1]}
        //       </Twemoji>
        //     )
        //   }
        // },
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
      ])(config.text)
    )
  }, [config.text])

  const theme = ['default', 'dim', 'lightsout'].includes(config.theme)
    ? config.theme
    : 'default'

  const dateAppDetails = [
    config.date && renderDate(config.date),

    config.views > 0 && (<span className={cs(styles.link, styles['rt-likes'])}>
      <strong>{styleNumber(config.views)}</strong> Views
    </span>)
  ].filter(Boolean)

  return (
    <div className={cs(styles.tweet, styles[theme], className)} {...rest}>
      <div className={styles['user-info']}>
        <div className={styles['avatar-container']}>
          <HoverAvatar
            src={config.user.avatar}
            alt={config.user.name}
            userName={config.user.name}
            userHandle={config.user.nickname}
            userBio={config.user.bio}
            followers={config.user.followers}
            following={config.user.following}
            verified={config.user.verified}
            headline={config.user.headline}
          />
        </div>

        <div className={styles['user-info-right']}>
          {/* {dropButtonIcon} */}

          <div className={styles['user-name']}>

            <span className={styles.link}>{config.user.name}</span>

            {config.user.verified && verifiedIcon}

            {config.user.locked && !config.user.verified && lockIcon}
          </div>

          <div className={styles['user-nickname']}>@{config.user.nickname}</div>
        </div>
      </div>

      <div className={styles['tweet-text']}>
        {text && <div className={styles.txt}>{text}</div>}

        {config.imageUrls && (
          <ImagePreview imageUrls={config.imageUrls} />
        )}


      </div>

      {dateAppDetails && dateAppDetails.length && (
        <div className={styles['date-app-details']}>
          {dateAppDetails.map((d, i) => (
            <React.Fragment key={i}>
              {d}
              {i < dateAppDetails.length - 1 && ' · '}
            </React.Fragment>
          ))}
        </div>
      )}



      <div className={styles['bottom-buttons']}>

        {config.comments > 0 && <CommentAction comment_count={config.comments} />}
        

        {config.retweets > 0 && <RetweetAction retweet_count={config.retweets} />}
        {config.likes > 0 && <FavoriteAction favorite_count={config.likes} />}
        {config.bookmarks > 0 && <BookmarkAction bookmark_count={config.bookmarks} />}
        {shareAction}
      </div>
    </div>
  )
}
