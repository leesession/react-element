const Mock = require('mockjs')
const resJson=[
    {name:'今天是个好日子',time:'2019-3-18',detail:'今天好日子，今天可以做react-demo'},
    {name:'今天是周一',time:'2019-3-18',detail:'周一是一周辛勤劳动的开始，加油老哥'}
]
Mock.mock('/list', 'post', resJson)
