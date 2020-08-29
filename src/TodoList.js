import React, { Component, Fragment } from 'react';
import TodoItem from './components/Todo/Todoitem'
import axios from 'axios'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [
            ]
        }
    }
    render() {
        console.log('render')
        return (
            <Fragment>
                {/** 这是注释 */}
                <div>
                     {/** htmlFor 点击Label focus input */}
                    <label htmlFor='input'>输入待办事项</label>
                    <button>baidu<a href='http://baidu.com'>111</a></button>
                    <input
                        ref={(input)=>{
                            this.input = input
                        }}
                        id='input'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    ></input>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()  }
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return  this.state.list.map((item, index) => {
            return <div  key={index}>
                  <TodoItem item = {item} index={index} delete={this.delete.bind(this)} ></TodoItem>
            </div>
        })
    }
    handleInputChange(e) {
        console.log(this.input)
        const value = e.target.value
        this.setState(()=>{
            return {
                inputValue: value
            }
        })
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    //组件即将挂载之前
    componentWillMount(){
        console.log('componentWillMount')
    }
     //组件挂载之后
    componentDidMount(){
        axios.get('/api/todolist').then().catch(()=>{
            console.log('error')
        })
        console.log('componentDidMount')
    }

    //组件更新流程 props或者state发生变化

    //组件更新之前
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
   
     //组件即将被更新
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')

    }

    handleBtnClick() {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{
            //前面是异步的 第二个函数会在它之后执行
        })
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })

    }
    delete(index){
        console.log(index)
        console.log(this.state.list)
        let list  = [...this.state.list]
        list.splice(index,1)
        console.log(list)
        this.setState({
            list: list
        })


    }

}


export default TodoList;
