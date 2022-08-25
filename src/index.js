import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App/>
);
reportWebVitals();
