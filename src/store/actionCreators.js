import { DELETE_TODO_ITEM,INIT_TODO_LIST }from './actionTypes'
import axios from 'axios'
import store from '../store'


export const deleteItem = (index) =>({
    type:DELETE_TODO_ITEM,
    index
})

export const initList = (data) =>({
    type:INIT_TODO_LIST,
    data
})

export const getTodolist = (data) => {
    return (dispatch)=>{
        axios.get('./list.json').then((res)=>{
            const data = res.data
            const action = initList(data)
            dispatch(action)

       })
    }
}