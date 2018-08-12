import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Calc from './Components/Calc/Calc';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        {/* <Calc />     */}
    </div>,document.getElementById('root'));
registerServiceWorker();
