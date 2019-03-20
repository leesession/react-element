import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.less';
import { Button } from 'element-react';

import 'element-theme-default';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            num:0,
           
        }
        this.buttonClick=this.buttonClick.bind(this)
        this.pageLink=this.pageLink.bind(this)
    }
    pageLink(){
        this.props.history.push('/list')
    }
    buttonClick(){
        this.setState({
            num:this.state.num+1
        })
        let _this=this
        setTimeout(()=>{
            console.log(_this.state.num)
        },20)
    
    }

  render() {
     
    return (
        <div className='App'>
             This is App Page
             <Button type='primary' onClick={this.buttonClick}>el-button</Button>
             <h3>{this.state.num}</h3>
             <h3>
                 <Button onClick={this.pageLink}>跳到List</Button>
             </h3>
             <h3><Link to='/detail'>Listdetail</Link></h3>
             <h3><a href='#/list'>List</a></h3>
             <h3><a href='#/detail'>Listdetail</a></h3>

        </div>
    );
  }
}

export default App;
