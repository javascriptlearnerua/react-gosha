import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Header extends React.Component {
    render() {
        return(
            <header>{this.props.title}</header>
        );
    }
}

class App extends React.Component {
    render() {
        return(
            <div className="main-section">
                <Header title="Шапка сайта"/>
                <h1>Hello React!</h1>
                <input
                    placeholder={this.helpText}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver}
                />
            </div>
        );
    }
    helpText = "Help text";
    inputClick() { alert('clicked') }
    mouseOver () { console.log('mouse over') }
}



root.render(<App/>);

