import React from 'react'
import reducer from './reducer'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Router, { Route } from 'react-router'
import { VotingContainer } from './components/Voting'
import { ResultsContainer } from './components/Results'

const store = createStore(reducer)
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: {Sunshine: 2}
        }
    }
})

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
