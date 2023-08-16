import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider} from 'react-redux';
import Counterstore from './src/utilis/Counterstore';

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={Counterstore}><App/></Provider>)