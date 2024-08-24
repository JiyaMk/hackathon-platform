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
  CNavGroup,
  CBadge,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPuzzlePiece, faCloudDownloadAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <CSidebar className="border-end" >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand><img src={appicon} style={{height:'60px', width:'80px'}} alt='logo'></img></CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Dashboard</CNavTitle>

        <CNavItem href="/admin-dashboard" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
      <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
        Upload CSV
    </CNavItem>
        <CNavItem href="/analytics-page" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }} >
          <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Analytics
        </CNavItem>

        <CNavItem href="/teams" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }} >
          <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Teams
        </CNavItem>

        <CNavItem href="/teams-list" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }} >
          <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Teams Score
        </CNavItem>

        <CNavItem href="https://coreui.io">
          <FontAwesomeIcon icon={faCloudDownloadAlt} className="nav-icon" /> Validate Judge
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">
          <FontAwesomeIcon icon={faLayerGroup} className="nav-icon" /> Logout
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
