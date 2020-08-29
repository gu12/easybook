import React,{Component,Fragment} from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
       show:true
    }
  }
 handleClick = ()=>{
    this.setState({
      show: this.state.show? false : true
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
       
        <div className={this.state.show ? 'show':'hide'}>hello world</div>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    )
  }

}


export default App;
