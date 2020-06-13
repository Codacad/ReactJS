import React from "react"
import Navbar from './components/navbar'
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:10
        }
    }
    render(){
        return(            
            <div className="counter mt-5">                
                <h1>{this.state.count}</h1>
                <button onClick={this.count} className="btn btn-success">Count</button>
            </div>
        )
    }
    count = () => {
        this.setState({
            count:this.state.count+1
        })
    }
}
class App extends React.Component{
    render(){
        return(  
            <div className="app-container">
                <Navbar />          
                <div className="container">                
                    <h1>Hello, React, We are ready to move</h1>
                    <Counter />                    
                </div>
            </div>
        )
    }
}

export default App