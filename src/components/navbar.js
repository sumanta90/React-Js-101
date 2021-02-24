import { Component } from "react";

class MyNavBar extends Component{
    render(){
        return (
            <div className="ui inverted menu">
                <div className="header item">21North</div>
                <div className="active item"><a href="/add-queue">Add Queue</a></div>
                <a className="item"><a href="/queue-list">Queue List</a></a>
                
                <div className="right menu">
                
                <a className="item" href="/">Home</a>
                </div>
          </div>
        )
    }
}

export default MyNavBar