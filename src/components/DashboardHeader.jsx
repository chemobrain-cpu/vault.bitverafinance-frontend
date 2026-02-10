import React from 'react';
import styles from './DashboardHeader.module.css';
import { HiMenu } from 'react-icons/hi';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DesktopHeader = ({ openMobileMenu, title }) => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.userAuth);

    return (
        <div className={styles.glassHeader}>
            <div className={styles.headerLeft}>
                {/* Hamburger menu icon */}
                <HiMenu
                    className={styles.hamburger}
                    size={30}
                    color='#fff'
                    onClick={openMobileMenu}
                />
                <h2 className={styles.logoText}>{title}</h2>
            </div>

            <div className={styles.headerRight}>
                <button className={styles.notificationButton}>
                    <FaBell size={15} color='#fff' />
                    <span className={styles.badge}>0</span>
                </button>

                <button className={styles.profileButton} onClick={() => navigate('/profile')}>
                    {user?.profilePhotoUrl ? (
                        <img src={user.profilePhotoUrl} alt="Profile" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            width="24"
                            height="24"
                        >
                            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                        </svg>
                    )}
                </button>

            </div>
        </div>
    );
};

export default DesktopHeader;



