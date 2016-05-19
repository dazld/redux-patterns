import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addStuff } from '../actions/my-counter';

class First extends Component {
    constructor(props) {
        super(props);
        this.doStuff = this.doStuff.bind(this);
        this.state = {
            isOperating: false,
            boom: false
        };
    }
    doStuff(boom = false, evt) {
        if (this.state.isOperating) {
            return;
        }

        this.setState({
            isOperating: true,
            boom: false
        });

        this.props.dispatch(addStuff(this.props.currentValue, boom)).then(() => {
            this.setState({
                isOperating: false
            });
        }).catch(err => {
            this.setState({
                isOperating: false,
                boom: err.message
            });
        });
    }
    render() {
        return (
            <div>
                <h1>Direct Promise observation</h1>
                {this.state.boom && <p>{this.state.boom}</p>}
                <p>{this.props.currentValue}</p>
                <button disabled={this.state.isOperating} onClick={this.doStuff.bind(this, false)}>Operate on counter</button>
                <button disabled={this.state.isOperating} onClick={this.doStuff.bind(this, true)}>Boom</button>
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
