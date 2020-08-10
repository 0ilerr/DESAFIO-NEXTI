import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import history from "./history";

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>,
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
