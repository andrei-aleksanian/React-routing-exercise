import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    console.log("I am being rendered! render");

    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({
                        component: cmp.default
                    });
                })
        }

        render(){
            console.log("I am being rendered! async");

            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;