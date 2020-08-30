import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'



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
                    renderItem={item => <List.Item>{item}</List.Item>}

                />
            </div>
        )
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
    submit=(e)=>{
        const action = {
            type: 'add_todo_item',
        }
        store.dispatch(action)
         
    }
}

export default Antdtodo
