const INITIAL_STATE = {
  menuFlag: false,
};

const subReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPENMENU':
      return {
        ...state,
        menuFlag: action.payload.flag,
      };
    case 'CLOSEMENU':
      return {
        ...state,
        menuFlag: action.payload.flag,
      };
    default:
      return state;
  }
};

export default subReducer;
