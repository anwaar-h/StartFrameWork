import React from "react";
import { Component } from "react";
import { NavLink } from "react-router";

export default class NotFound extends Component {
    render(){
        return (
            <div className="p-5 text-center">
                <h1>404</h1>
                <h1>Page Not Found</h1>
                <NavLink to={"/"} className="btn btn-outline-success">Back To Home</NavLink>
            </div>
        )
    }
}