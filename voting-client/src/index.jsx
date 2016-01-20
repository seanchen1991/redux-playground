import React from 'react'
import reducer from './reducer'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import App from './components/App'
import { Provider } from 'react-redux'
import { setState } from './action_creators'
import Router, { Route } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { VotingContainer } from './components/Voting'
import { ResultsContainer } from './components/Results'
import remoteActionMiddleware from './remote_action_middleware'

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore)
const store = createStoreWithMiddleware(reducer)

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state =>
    store.dispatch(setState(state))
)

const routes = <Route component={App}>
    <Route path="/" component={VotingContainer} />
    <Route path="/results" component={ResultsContainer} />
</Route>

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)
