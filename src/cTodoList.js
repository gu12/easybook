import React, { Component, Fragment } from 'react';
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
                    {
                        this.state.list.map((item, index) => {
                            return <div  key={index}>
                                      {/** dangerouslySetInnerHTML 不转 */}
                                <li dangerouslySetInnerHTML={{__html:item}}></li>
                                <button onClick={this.delete.bind(this,index)}>删除</button>
                            </div>
                        })
                    }
                </ul>


            </Fragment>

        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
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
