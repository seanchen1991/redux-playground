import React, { Component } from 'react'
import Vote from './Vote'
import Winner from './Winner'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
    mixins: [PureRenderMixin],

    render() {
        return (
            <div>
                {this.props.winner ?
                    <Winner ref="winner" winner={this.props.winner} /> :
                    <Vote {...this.props} />}
            </div>
        )
    }
})
