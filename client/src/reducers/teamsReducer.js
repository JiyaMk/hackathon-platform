const initialState = {
  teams: JSON.parse(localStorage.getItem('teams')) || [] // Initialize from local storage or default data
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('teams', JSON.stringify(state.teams));
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
    default:
      return state;
  }
};

export default teamsReducer;

