const INITIAL_STATE = {
  menuFlag: false,
  location:"global"
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
    case 'LOCATION':
      return {
        ...state,
        location: action.payload.location,
      };
    default:
      return state;
  }
};

export default subReducer;
