import React, { Component } from 'react';
import {Button} from 'element-react'
import {connect} from 'react-redux'
import {addGum, addGumAsync} from '../../strore/store'

class Listdetail extends Component{
  constructor(props){
    super(props)
    this.state={
      detail:props.location.query
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
    render(){
      const {num , addGum ,addGumAsync} = this.props
        return(
          <div>
            <h1>store中的数值为：{num}</h1>
            <Button type='success' onClick={addGum}>addGum加</Button>
            <Button type='danger' onClick={addGumAsync}>addGumAsync延迟加</Button>
            <h2>{this.state.detail.name}</h2>
            <h3>{this.state.detail.detail}</h3>
            <h5>{this.state.detail.time}</h5>
          </div>
        );
    }
}
// 获得数据
const mapStateToProps = (state) => {
  return {num: state}
}
// 获得方法,方法是上面倒入的 //将action的所有方法绑定到props上
const mapDispatchToProps = {addGum, addGumAsync}
// connect 第一个是获得数据源，第二个是获得方法源


export default  Listdetail= connect(mapStateToProps, mapDispatchToProps)(Listdetail)