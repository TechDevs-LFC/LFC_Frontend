import * as ReactDOMClient from 'react-dom/client';
import App from './App.js';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home" />);