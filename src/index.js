import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import Auth from "./components/auth";
import DataContext from "./context/data";

function  Main(){


    return(
        <Auth>
        <DataContext>
        <App />
        </DataContext>
        </Auth>
            )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
