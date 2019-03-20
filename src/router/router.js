import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../pages/App'
import List from '../pages/list/List'; // 导入About组件
import Listdetail from '../pages/listdetail/Listdetail' // 导入Inbox组件


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/detail" component={Listdetail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;