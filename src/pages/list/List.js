import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
require('../../mock/mock')

export default class List extends Component{
  constructor(props){
    super(props)
    this.state={
        List:[]
    }
    this.LinkToDetail=this.LinkToDetail.bind(this)
  }
  LinkToDetail(query){
    console.log(query)
    // this.props.history.push({pathname:'/detail',query:query})
  }
  async componentDidMount(){
     let {data} = await axios.post('/list')
    setTimeout(()=>{
      this.setState({
        List:this.state.List.concat(data)
      })
    },1000)
    
  }
    render(){
        return(
          <ul>
            {this.state.List.map((item,index)=>{
                return <li key={index}>
                  <Link to={{pathname:'/detail',query:item}}> {item.name}</Link>
                 
                </li>
            })}
        </ul>
        );
    }
}