const initialState = {
  photos: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PHOTO_LOADED":
      console.log(state);
      return {
        ...state,
        photos: action.payload,
      };

    default:
    return state;
  }
};

export default reducer;
