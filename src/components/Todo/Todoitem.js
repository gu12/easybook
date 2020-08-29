import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }
    render() {
        console.log('子组件触发render')
        return (
            <div>
                {this.props.item}
                <button onClick={this.delete}>删除</button>
            </div>
        )
    }
    delete() {
         this.props.delete(this.props.index)
    }

    shouldComponentUpdate(nextProps,nextState){
        //避免父组件触发render 子组件跟着执行
        console.log('nextprops',nextProps)
        if(nextProps.item !== this.props.item){
            return true
        }else{
            return false
        }
    }
    //此组件需要从父组件接收参数 当父组件中的render函数被重新执行的时候就会执行此函数
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    
    }

    //
    componentWillUnmount(){
        console.log('子组件componentWillUnmount')

    }

}

TodoItem.propTypes = {
    test:PropTypes.string.isRequired ,  //必须传
    item:PropTypes.string ,  //设置props类型
    delete:PropTypes.func,   //设置props类型
    index:PropTypes.number,   //设置props类型
}

//属性默认值 arrayof(||) oneOfType 
TodoItem.defaultProps = {
    test:'111'
}

export default TodoItem;
