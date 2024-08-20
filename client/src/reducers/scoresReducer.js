const initialState = {
    scores: []
  };
  
  const scoresReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SCORE':
        return {
          ...state,
          scores: action.payload
        };
      default:
        return state;
    }
  };
  
  export default scoresReducer;
  