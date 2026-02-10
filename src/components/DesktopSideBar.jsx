import React from 'react';
import {
  FaUser, FaTachometerAlt, FaSignOutAlt, FaCog, FaCoins, FaChartLine
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './DesktopSideBar.module.css';

const DesktopSideBar = () => {
  const links = [
    { to: '/invest', icon: <FaTachometerAlt />, label: 'Portfolio' },
    { to: '/profile', icon: <FaUser />, label: 'My Profile' },
   
    { to: '/fund-account', icon: <FaCoins />, label: 'Fund Account' },

    { to: '/upgrade', icon: <FaCoins />, label: 'Upgrade' },

    { to: '/trade-center', icon: <FaCoins />, label: 'Trade center' },

    { to: '/withdraw', icon: <FaCoins />, label: 'Withdrawals' },
  
    { to: '/settings', icon: <FaCog />, label: 'Settings' },
    { to: '/logout', icon: <FaSignOutAlt />, label: 'Log-Out' },
  ];

  return (
    <div className={styles.sidebar} style={{  backgroundColor: '#0C1125'}} >
      <div className={styles.topSection} style={{  backgroundColor: '#0C1125'}}>
        <div>SWN</div>
      </div>

      <div className={styles.navWrapper} style={{  backgroundColor: '#0C1125'}}>
        {links.map(({ to, icon, label }) => (
          <NavLink
            to={to}
            key={to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopSideBar;


