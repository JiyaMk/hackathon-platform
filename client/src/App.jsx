import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import AdminDashboard from './components/AdminDashboard';
import JudgeDashboard from './components/JudgeDashboard';
import AnalyticsPage from './components/AnalyticsPage';
import TeamList from './components/TeamList';
import Teams from './components/Teams';
import store from './store';
import ValidateJudge from './components/ValidateJudge';
import { ThreeDCardDemo } from './test';

import ChooseUser from './components/ChooseUser'; // Import ChooseUser component
import AdminSignin from './components/AdminSignin'; // Import AdminSignin component
import JudgeRegister from './components/JudgeRegister'; // Import JudgeRegister component
import JudgeSignin from './components/JudgeSignin'; // Import JudgeSignin component
import Home from './components/Home'
import About from './components/About';
import ContactForm from './components/ContactForm';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
      {/* <AuroraBackground className="relative"> */}
          {/* <ThreeDCardDemo className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}
         
        {/* </AuroraBackground> */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/contact" element={<ContactForm/>} />
          
          {/* Choose User Page */}
          <Route path="/choose-user" element={<ChooseUser />} />

          {/* Sign-In Pages */}
          <Route path="/admin-signin" element={<AdminSignin />} />
          <Route path="/judge-register" element={<JudgeRegister />} />
          <Route path="/judge-signin" element={<JudgeSignin />} />

          {/* Dashboard Pages */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/judge-dashboard" element={<JudgeDashboard />} />

          <Route path="/analytics-page" element={<AnalyticsPage />} />
          <Route path="/teams-list" element={<TeamList />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/validate-judge" element={<ValidateJudge />} />
          
          {/* Redirect from any other routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
