import React from "react";
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="" className="navbar-brand">React Start</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar;