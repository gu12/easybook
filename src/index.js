
import React from 'react';  //使用JSX语法必须引入React
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //组件名必须大写
import TodoList from './TodoList'; 
import Antdtodo from './Antdtodo.jsx'; 
import 'antd/dist/antd.css'

ReactDOM.render(
    <Antdtodo/>,
  document.getElementById('root')
);

