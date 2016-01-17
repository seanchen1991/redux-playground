import React, { Component } from 'react'

export default class Winner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="winner">
                Winner is {this.props.winner}!
            </div>
        )
    }
}
