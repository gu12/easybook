import React, { Component, Fragment } from 'react';

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
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    ></input>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <div  key={index}>
                                <li>{item}</li>
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
