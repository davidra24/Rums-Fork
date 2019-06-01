function rooms_reducer(state = {},action) {
  switch (action.type) {
    case 'SET_ROOMS_LIST':{
        return {...state, ...action.payload}
    }
    case 'SET_ROOM_KEY':{
        return {...state, ...action.payload}
    }
    default:
      return state;
  }
}

export default rooms_reducer;
