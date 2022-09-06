import React, { Component } from "react";
import Navitems from "./Navitems";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return(
            <nav>
                <ul>
                    <Navitems item='Home' tolink='/'></Navitems>
                    <Navitems item='CreatePost' tolink='createpost'></Navitems>
                    <Navitems item='Account' tolink='account'></Navitems>
                </ul>
            </nav>

        )
    }
}

export default Navbar