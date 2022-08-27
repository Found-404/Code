import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from 'router';
import './base.less'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <MyRouter />
);
