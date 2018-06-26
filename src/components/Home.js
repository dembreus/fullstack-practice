import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Link to="/Page2"><button>Page2</button></Link>
            </div>
        );
    }
}
export default Home;