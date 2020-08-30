import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { DELETE_TODO_ITEM }from './store/actionTypes'
// import {deleteItem} from './store/actionCreators'
import  {deleteItem,initList,getTodolist} from "./store/actionCreators";
import axios from 'axios'

class Antdtodo extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
        console.log(store.getState())
    }


    render() {
        return (
            <div style={{ margin: '30px' }}>
                <div>
                    <Input onChange={this.inputChange} value={this.state.inputValue} placeholder='请输入' style={{ width: '300px', padding: '10px', marginRight: '20px' }}></Input>
                    <Button type='primary' onClick={this.submit}>提交</Button>
                </div>
                <List
                    style={{ width: '300px', marginTop: '20px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item>

                        <div>
                            {item}
                            <Button type='primary' onClick={this.delete.bind(this,index)}>删除</Button>
                        </div>
                    </List.Item>)}

                />
            </div>
        )
    }
    componentWillMount(){
        const action = getTodolist()
        store.dispatch(action)
        //store发现你dispath的是一个函数 就会自动执行这个函数 并把dispatch传给这个函数
        
    }
    inputChange = (e) => {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    handleStoreChange = () => {
        this.setState(store.getState())
    }
    submit = (e) => {
        if (!this.state.inputValue) {
            return
        }
        const action = {
            type: 'add_todo_item',
        }
        store.dispatch(action)
    }
    delete = (index) => {

        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action = deleteItem(index)
        store.dispatch(action)
    }

}

export default Antdtodo
