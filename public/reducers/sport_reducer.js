export const sportReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH SPORT":
           return state.concat(action.team);
        case "FETCH ERROR":
            return [
                ...state,
                {
                    err: action.error
                }
            ];
        case "ADD SPORT":
          /*  return state.concat({
                team: action.team
            });*/
            return [
                ...state,
                {
                    team: action.team
                }
            ];
        case "REMOVE SPORT":
            return state.filter((val,index) => {
                    return index !== action.index;
                });
        default:
            return state;
    }
}