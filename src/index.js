import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import DataContext from "./context/data";

function  Main(){


    return(
        <DataContext>
        <App />
        </DataContext>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
