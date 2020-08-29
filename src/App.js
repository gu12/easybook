import React,{Component,Fragment} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
       show:true,
       list:[]
    }
  }
 handleClick = ()=>{
    this.setState({
      show: this.state.show? false : true
    })
 }
 handleClicklist = ()=>{
  this.setState((prevstate)=>{
     return {
       list:[...prevstate.list,'item']
     }
  })
}
  render(){
    return (
      <Fragment>
        <CSSTransition
         in={this.state.show}
         timeout={1000}
         classNames='fade'
         unmountOnExit
         onEntered={(el)=>{el.style.color = 'red'}}
         appear = {true}
        >
            <div>
              hello
            </div>
        </CSSTransition>
        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
            return (
              <CSSTransition
              timeout={1000}
              classNames='fade'
              unmountOnExit
              onEntered={(el)=>{el.style.color = 'red'}}
              appear = {true}
              key={index}
             >
            <div>{item}</div>
            </CSSTransition>
            )
            })
          }
        </TransitionGroup>
       
       
        <div className={this.state.show ? 'show':'hide'}>hello world</div>
        <button onClick={this.handleClick}>toggle</button>
        <button onClick={this.handleClicklist}>list按钮</button>
      </Fragment>
    )
  }

}


export default App;
