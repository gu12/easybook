import { DELETE_TODO_ITEM,INIT_TODO_LIST }from './actionTypes'


const defaultState = {
    inputValue: '123',
    list:[]
}



//reducer不能改state
export default (state = defaultState,action) =>{
        console.log(state,action)
        const newState = JSON.parse(JSON.stringify(state))
        if(action.type === 'change_input_value'){
              newState.inputValue = action.value
              return newState
        } 
         if(action.type === 'add_todo_item'){
              newState.list.push(newState.inputValue)
              newState.inputValue = ''
              return newState
        } 
        
        if(action.type === 'delete_todo_item'){
              newState.list.splice(action.index,1)
              return newState
        }
         if(action.type === INIT_TODO_LIST){
              newState.list = action.data
              return newState
        }
        return  state
}