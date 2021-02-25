import { Component } from "react";



//form for add queue
class AddQueueForm extends Component{
    render(){
        return(
            
            <div className="fluid">

                <div style={{  }}>
                <form className="ui form">
                    <div className="field">
                        <label>Amb. ID</label>
                        <input type="text" placeholder="Ambassador ID" />
                    </div>
                    <div className="field">
                        <label>Queue. ID</label>
                        <input type="text" placeholder="Queue ID" />
                    </div>
                    <div className="field">
                        <label>Task Count</label>
                        <input type="text" placeholder="Task Count" />
                    </div>
                    <div className="field">
                        <label>Reason</label>
                        <input type="text" placeholder="Reason / Note" />
                    </div>
                    <div className="field">
                        <input type="submit" className="fluid ui teal button" value="Submit" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

class AddQueueRoot extends Component{
    render(){
        return (
            <div className="">
                <div className="ui grid container">
                    <div className="two column row">
                        
                        <div className="column ui segment">
                        <h1 class="ui header">Semantic UI Fixed Template</h1>
                            <AddQueueForm />
                        </div>
                        <div className="column"></div>
                    </div>
                </div>
            </div>
            
        )
    }
}
class AddQueue extends Component{
    
    render(){
        return (
            
            <div className="ui container">
                <h1 class="ui header">Semantic UI Fixed Template</h1>
                <AddQueueRoot />
            </div>
        )
    }
}


export default AddQueue