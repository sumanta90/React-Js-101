import React, {Component} from 'react'
import ReactDom from 'react-dom'

import Card from './components/card'
import MyNavBar from './components/navbar'
import AddQueue from './components/add_queue'
import QueueList from './components/queue_list'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Home extends Component{
    render(){
        return <h1>Home page</h1>
    }
}

class App extends Component{
    render(){
        return (
            <div>
                <MyNavBar />
                
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/add-queue" component={AddQueue} />
                        <Route path="/queue-list" component={QueueList}/>
                    </Switch>
                </Router>

                
            </div>
        )
    }
}

ReactDom.render(<App />,document.getElementById('root'))