import { sportReducer } from "../reducers/sport_reducer"
import { createStore } from "redux"
import { middleware } from "../middleware/test_middleware"

export default createStore(sportReducer, middleware)