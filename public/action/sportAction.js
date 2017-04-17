import axios from "axios"
import { connect } from "react-redux"
import Layout from "../component/layout"


export function fetchSport() {
    return function (dispatch) {
        axios.get("/ajax/test/getData")
            .then((response) => {
                dispatch({
                    type: "FETCH SPORT",
                    team: response.data
                })
            })
            .catch((e) => {
                dispatch({
                    type: "FETCH ERROR",
                    error: e
                })
            })
    }
}
export function addSport(event) {
    if (event.keyCode == 13) {
        dispatch({
            type: "ADD SPORT",
            team: event.currentTarget.value
        });
        event.currentTarget.value = "";
    }
}
export function testAddSport(event) {
    if (event.keyCode == 13) {
        axios.post("/ajax/test/postData", {
            team: event.currentTarget.value
        })
        .then(function (response) {
                dispatch({
                    type: "ADD SPORT",
                    team: event.currentTarget.value
                });
                console.log(response);
            })
        .then(dispatch(fetchSport))
    }
}
export function removeSport(id) {
    dispatch({
        type: "REMOVE SPORT",
        index: id
    })
}
let mapStateToProps = (store) => {
    return {
        store: store
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        myAddSport(event) {
            if (event.keyCode == 13) {
                dispatch({
                    type: "ADD SPORT",
                    team: event.currentTarget.value
                });
                event.currentTarget.value = "";
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)