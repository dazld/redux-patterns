import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addStuff } from '../actions/my-counter';

class First extends Component {
    constructor(props) {
        super(props);
        this.doStuff = this.doStuff.bind(this);
        this.state = {
            isOperating: false
        };
    }
    doStuff() {
        if (this.state.isOperating) {
            return;
        }

        this.setState({
            isOperating: true
        });

        this.props.dispatch(addStuff(this.props.currentValue)).then(() => {
            this.setState({
                isOperating: false
            });
        });
    }
    render() {
        return (
            <div>
                <h1>Direct Promise observation</h1>
                <p>{this.props.currentValue}</p>
                <button disabled={this.state.isOperating} onClick={this.doStuff}>Operate on counter</button>
            </div>
        );
    }
}

First.propTypes = {
    currentValue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};


export default connect(function(state) {
    return {
        currentValue: state.myCounter
    };
})(First);
