import React, { Component } from 'react';
import {withRouter} from "react-router";

class Course extends Component {
    state={
        title:null,
        id:null
    };

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate() {
        this.updateData();
    }

    updateData = () => {
        if (this.state.id !== this.props.match.params.id) {
            const query = new URLSearchParams(this.props.location.search);
            let title;
            for (let param of query.entries()) {
                title = param[1];
            }

            this.setState({
                id: this.props.match.params.id,
                title
            });
        }
    };

    componentWillUnmount() {
        console.log("Cruel world...");

    }

    render () {
        console.log("I am being rendered!");
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);