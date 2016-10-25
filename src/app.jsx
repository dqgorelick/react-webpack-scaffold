import '../assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <h2>React Webpack Scaffold</h2>
                <p>WORKING!</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
