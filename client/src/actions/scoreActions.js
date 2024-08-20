export const ADD_SCORE = 'ADD_SCORE';
export const LOCK_SCORE = 'LOCK_SCORE';
export const SUBMIT_SCORES = 'SUBMIT_SCORES';
export const addScore = (teamId, scores) => ({
  type: ADD_SCORE,
  payload: { teamId, scores }
});

export const lockScore = (teamId, scores) => ({
  type: LOCK_SCORE,
  payload: { teamId, scores }
});

export const submitScores = () => ({
  type: SUBMIT_SCORES
});