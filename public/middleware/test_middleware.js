import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import axios from "axios"

let logger = (store) => (next) => (action) => {
    if (action.type == "ADD SPORT") {
        setTimeout(() => {
            axios.post("/ajax/test/postData", {
                team: action.team
            }).then((response) => {
                console.log("success");
            }).catch((error) => {
                console.log("error");
            });
        },0);

    }
    return next(action);
}

export const middleware = applyMiddleware(logger, thunk);