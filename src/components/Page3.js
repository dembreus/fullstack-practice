import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Page3 extends Component {
    render() {
        return (
            <div>
                <h1>Hello World from page 3</h1>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Page2"><button>Page2</button></Link>
            </div>
        );
    }
}
export default Page3;