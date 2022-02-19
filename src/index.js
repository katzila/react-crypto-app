import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


import App from './App';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

ReactDOM.render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Router>
    , document.getElementById('root'));