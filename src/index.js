import React from 'react';
import ReactDOM from 'react-dom/client';

const inputClick = () => alert('clicked');
const mouseOver = () => console.log('mouse over');
const helpText = "Help text";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
    return(
        <header>Шапка сайта</header>
    );
}

function App() {
    return(
        <div className="main-section">
            <Header />
            <h1>Hello React!</h1>
            <input
                placeholder={helpText}
                onClick={inputClick}
                onMouseEnter={mouseOver}
            />
        </div>
    );
}



root.render(<App/>);

