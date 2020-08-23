import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }
    render() {
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

}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired ,  //必须传
    item:PropTypes.string ,  //设置props类型
    delete:PropTypes.func,   //设置props类型
    index:PropTypes.number,   //设置props类型
}

//属性默认值 arrayof(||)
TodoItem.defaultProps = {
    test:'111'
}

export default TodoItem;
