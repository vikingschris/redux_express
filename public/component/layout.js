import React from "react"
import { fetchSport } from "../action/sportAction";

export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchSport());
    }
    render() {
        return (
            <div>
                <h1>ReduxExpress Tutorial</h1>
                <input type="text" onKeyDown={this.props.myAddSport.bind(this)} placeholder="add team..."/>
                <ul>
                    {this.props.store.map((val, index) => {
                        return (
                            <li key={index}>{val.team}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}