import React, { Component, Fragment } from 'react';
import TodoItem from './components/Todo/Todoitem'

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
        return (
            <Fragment>
                {/** 这是注释 */}
                <div>
                     {/** htmlFor 点击Label focus input */}
                    <label htmlFor='input'>输入待办事项</label>
                    <input
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
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

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
