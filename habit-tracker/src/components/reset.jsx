import React, { Component } from 'react'

export default class Reset extends Component {
    render() {
        return (
            <button className="reset__button" onClick={this.props.onReset}>
                Reset All
            </button>
        )
    }
}
