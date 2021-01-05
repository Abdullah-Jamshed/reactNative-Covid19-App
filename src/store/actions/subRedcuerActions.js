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

export {openMenu, closeMenu};
