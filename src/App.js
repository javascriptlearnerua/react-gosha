import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from "./img/react-log.svg"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            helpText: "Help text",
            userData: "",
        }

        this.inputClick = this.inputClick.bind(this) // эта строка нужна, чтобы изменять состояния в собственных методах
    }

    componentDidUpdate(prevProp) {
        if (this.state.helpText !== "help"){
            console.log("some");
        }
    }

    render() {
        return(
            <div className="main-section">
                <Header title="Шапка сайта"/>
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input
                    placeholder={this.state.helpText}
                    onChange={event => this.setState({userData: event.target.value})}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}
                />
                <span>{this.state.helpText === "hello"? "YES" : "NO"}</span>
                <Image image={logo}/>
                <img src={logo} alt={this.state.helpText}/>

            </div>
        );
    }
    inputClick() {
        alert('clicked');
        this.setState({ helpText: "Changed" })
    }
    mouseOver () { console.log('mouse over') }
}


export default App