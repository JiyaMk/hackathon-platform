import React from 'react';
import appicon from '../assets/appicon.png';
import { Link } from 'react-router-dom'; 
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CSidebarBrand,
  CSidebarHeader,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUpload, faChartLine, faUsers, faChartBar, faCheckCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <img src={appicon} style={{ height: '60px', width: '80px' }} alt='logo' />
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Dashboard</CNavTitle>

        <CNavItem href="/admin-dashboard" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faUpload} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Upload CSV
        </CNavItem>

        <CNavItem href="/analytics-page" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faChartLine} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Analytics
        </CNavItem>

        <CNavItem href="/teams" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faUsers} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Teams
        </CNavItem>

        <CNavItem href="/teams-list" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faChartBar} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Teams Score
        </CNavItem>

        <CNavItem href="/validate-judge" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faCheckCircle} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Validate Judge
        </CNavItem>

        <CNavItem href="/logout" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Logout
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
