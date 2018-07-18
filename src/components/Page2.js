import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Page2 extends Component {

    state = {
        name: '',
        age: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ ...this.state })

        fetch('http://localhost:4000', {
            method:'post',
            body: data,
            headers: {
                "Content-type" : "application/json"
            }
        })
    }

    render() {
        console.log(this);
        return (
            <div>
                <h1>Hello World from page 2</h1>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Page3"><button>Page3</button></Link>

                <form onSubmit={this.handleSubmit}>
                    Name:
                    <label>
                        <input type="text" name="name" placeholder="name" onChange={e => this.setState({ name: e.target.value })} />
                        <input type="text" name="age" placeholder="age" onChange={e => this.setState ({age: e.target.value})} />
                    </label>
                    <input type="submit" value="submit" />
                </form>

            </div>
        );
    }
}
export default Page2