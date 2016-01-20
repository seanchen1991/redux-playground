import React from 'react'
import Winner from './Winner'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Results = React.createClass({
    mixins: [PureRenderMixin],

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry)
        }
        return 0
    },

    getPair() {
        return this.props.pair || {}
    },

    render() {
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <div className="results">
                <div className="tally">
                    {this.getPair().map(entry =>
                        <div key={entry} className="entry">
                            <h1>{entry}</h1>
                            <div className="voteCount">
                                {this.getVotes(entry)}
                            </div>
                        </div>
                    )}
                </div>
                <div className="management">
                    <button ref="next" className="next" onClick={this.props.next}>
                        Next
                    </button>
                </div>
            </div>
    }
})

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(
    mapStateToProps,
    actionCreators
)(Results)