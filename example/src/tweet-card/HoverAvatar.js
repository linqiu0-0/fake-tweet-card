import React, { useRef, useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Twemoji from './Twemoji';
import styles from './styles.module.css'
import { styleNumber, convertToBlue } from './utils/utils'


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

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    transition: '0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    },
}));

const UserProfile = styled(({ isHovered, ...otherProps }) => <Box {...otherProps} />)(({ theme, isHovered, width }) => ({
    position: 'absolute',
    top: '100%', // Position the profile below the avatar
    left: '0%',
    transform: `translateX(-${width / 2}px) translateY(10px)`, // Center based on dynamic width
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    display: isHovered ? 'block' : 'none', // Show the box based on the hover state
    zIndex: 2, // Ensure it's above other items
    padding: theme.spacing(2),
    width: 'max-content', // Width should expand with content
    maxWidth: '300px', // Set a maximum width for the tooltip
    textAlign: 'left', // Align text to the left
  }));
// Usage in the component remains the same


const HoverAvatar = ({ src, alt, userName, userHandle, userBio, followers, following, verified, headline }) => {
    // State to handle hover effect
    const [isHovered, setIsHovered] = useState(false);
    const profileRef = useRef(null);
    const [profileWidth, setProfileWidth] = useState(0);
  
    console.log(isHovered);

    useEffect(() => {
        if (profileRef.current) {
          setProfileWidth(profileRef.current.offsetWidth);
        }
    }, [isHovered]); // Dependence on isHovered to recalculate when the tooltip is visible
    

    return (
        <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <StyledAvatar
                src={src}
                alt={alt}
                sx={{ width: 56, height: 56 }}
            />
      {isHovered && (
        <UserProfile ref={profileRef} isHovered={isHovered} width={profileWidth}>
                    <StyledAvatar
                        src={src}
                        alt={alt}
                        sx={{ width: 56, height: 56 }}
                    />
                    <div className={styles['user-info-right']}>

                        <div className={styles['user-name']}>
                            <Twemoji
                                options={{ className: styles['twemoji-sm'] }}
                                className={styles['user-name-txt']}
                            >
                                <span className={styles.link}>{userName}</span>
                            </Twemoji>

                            {verified && verifiedIcon}
                        </div>
                        <div className={styles['user-nickname']}>@{userHandle}</div>

                    </div>
                    {/* User bio */}
                    {userBio && (
                        <Typography variant="body2" sx={{ marginY: 1 }}>
                            {userBio}
                        </Typography>
                    )}
                    <p/>
                    {convertToBlue(headline)}
                    
                    <p/>


                    <span className={styles['profile-info']}>
                        <strong>{styleNumber(following)}</strong> Following • 
                        <strong>{styleNumber(followers)}</strong> Followers
                    </span>                    
                </UserProfile>
            )}

        </div>
    );
};

export default HoverAvatar;
