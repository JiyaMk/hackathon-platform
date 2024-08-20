import { combineReducers } from 'redux';
import teamsReducer from './teamsReducer';
import scoresReducer from './scoresReducer';

const rootReducer = combineReducers({
  teams: teamsReducer,
  scores: scoresReducer
});

export default rootReducer;
