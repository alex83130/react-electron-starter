import React from "react";
import { Route } from "react-router-dom";
import About from './screen/About'
import Home from './screen/Home'
import Users from './screen/Users'

export default function navigationView() {
    return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
    );
}