const initialState = {
  teams: JSON.parse(localStorage.getItem('teams')) || [], // Initialize from local storage or default data
  submitted: JSON.parse(localStorage.getItem('submitted')) || false // Add submitted state
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('teams', JSON.stringify(state.teams));
  localStorage.setItem('submitted', JSON.stringify(state.submitted)); // Save submitted state
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      const newState = {
        ...state,
        teams: action.payload
      };
      saveToLocalStorage(newState);
      return newState;
      
    case 'ADD_SCORE':
      const stateWithUpdatedScores = {
        ...state,
        teams: state.teams.map(team =>
          team.id === action.payload.teamId
            ? { ...team, scores: action.payload.scores }
            : team
        )
      };
      saveToLocalStorage(stateWithUpdatedScores);
      return stateWithUpdatedScores;
      
    case 'LOCK_SCORE':
      const stateWithLockedScores = {
        ...state,
        teams: state.teams.map(team =>
          team.id === action.payload.teamId
            ? { ...team, scores: action.payload.scores, locked: true }
            : team
        )
      };
      saveToLocalStorage(stateWithLockedScores);
      return stateWithLockedScores;
      
    case 'SET_SUBMITTED': // Handle the action to update submitted state
      const stateWithSubmitted = {
        ...state,
        submitted: action.payload
      };
      saveToLocalStorage(stateWithSubmitted);
      return stateWithSubmitted;
      
    default:
      return state;
  }
};

export default teamsReducer;

