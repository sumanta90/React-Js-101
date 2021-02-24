import { Component } from "react";


class Card extends Component{
    render(){
        return (

            <div className="ui card">
                <div className="image">
                    <img src="/images/avatar2/large/kristy.png"></img>
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                        <span class="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        22 Friends
                    </a>
                </div>
            </div>
        )
    }
}


export default Card