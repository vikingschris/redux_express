import { connect } from "react-redux"
import { sportReducer } from "../reducers/sport_reducer"
import { middleware } from "../middleware/test_middleware"
import { createStore } from "redux"

export default createStore(sportReducer,middleware);