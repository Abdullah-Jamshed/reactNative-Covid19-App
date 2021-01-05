const openMenu = (flag) => {
  return (dispatch) => {
    dispatch({type: 'OPENMENU', payload: {flag}});
  };
};
const closeMenu = (flag) => {
  return (dispatch) => {
    dispatch({type: 'CLOSEMENU', payload: {flag}});
  };
};
const locationSet = (locationValue) => {
  return (dispatch) => {
    dispatch({type: 'LOCATION', payload: {locationValue}});
  };
};

export {openMenu, closeMenu, locationSet};
