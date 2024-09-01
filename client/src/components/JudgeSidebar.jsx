import React from 'react';
import appicon from '../assets/appicon.png';
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

const JudgeSidebar = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <img src={appicon} style={{ height: '60px', width: '80px' }} alt='logo' />
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Dashboard</CNavTitle>

        <CNavItem href="/judge-dashboard" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faUpload} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Upload Scores
        </CNavItem>


        <CNavItem href="/logout" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
          Logout
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default JudgeSidebar;
