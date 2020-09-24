import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HomePage from '../components/Home';

const App = () => <HomePage />;

export default () => ReactDOMServer.renderToString(<App />);
