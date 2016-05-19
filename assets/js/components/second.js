import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addStuff, sine } from '../actions/my-counter';

class Second extends Component {
    constructor(props) {
        super(props);
        this.doStuff = this.doStuff.bind(this);
    }
    doStuff() {
        if (this.props.isOperating) {
            return;
        }
        this.props.dispatch(sine(this.props.currentValue + 0.1));
    }
    render() {
        return (
            <div>
                <h1>Everything in redux</h1>
                <p>{this.props.currentValue}</p>
                <button disabled={this.props.isOperating} onClick={this.doStuff}>Operate on counter</button>
            </div>
        );
    }
}

Second.propTypes = {
    currentValue: PropTypes.number.isRequired,
    isOperating: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};


export default connect(function(state) {
    return {
        currentValue: state.anotherCounter.value,
        isOperating: state.anotherCounter.status
    };
})(Second);
