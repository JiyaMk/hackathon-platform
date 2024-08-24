import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignin from './components/AdminSignin';
import JudgeSignin from './components/JudgeSignin';
import AdminDashboard from './components/AdminDashboard';
import JudgeDashboard from './components/JudgeDashboard';
import { Provider } from 'react-redux';
import AnalyticsPage from './components/AnalyticsPage';
import TeamList from './components/TeamList';
import Teams from './components/Teams';
import store from './store';
import ValidateJudge from './components/ValidateJudge';

// function App() {
  const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Choose User Page */}
            <Route path="/choose-user" element={<ChooseUser />} />

            {/* Sign-In Pages */}
            <Route path="/admin-signin" element={<AdminSignin />} />
            <Route path="/judge-signin" element={<JudgeSignin />} />

            {/* Dashboard Pages */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/judge-dashboard" element={<JudgeDashboard />} />
            
            <Route path="/analytics-page" element={<AnalyticsPage/>} />
            <Route path="/teams-list" element={<TeamList/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/validate-judge" element={<ValidateJudge/>} />
            {/* Redirect from any other routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Provider>
    );
  };

export default App;
