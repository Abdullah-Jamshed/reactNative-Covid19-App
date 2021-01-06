const INITIAL_STATE = {
  menuFlag: false,
  location: 'global',
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
      const flagName =
        action.payload.locationValue.name &&
        action.payload.locationValue.name.replace(/\s/g, '').toLowerCase();
      return {
        ...state,
        location: action.payload.locationValue,
        flagName: flagName,
      };
    default:
      return state;
  }
};

export default subReducer;
