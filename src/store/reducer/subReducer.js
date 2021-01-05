const INITIAL_STATE = {
  name: 'Jamshed',
};

const subReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACT':
      return {
        ...state,
        name: 'Abdullah',
      };
    default:
      return state;
  }
};

export default subReducer;
