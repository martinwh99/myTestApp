import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';
import AppLayout from '../appLayout/components/appLayout.jsx';
import Login from '../logon/containers/login';


export default function (injectDeps, {FlowRouter}){
    const MainLayoutCtx = injectDeps(Layout);

    
    FlowRouter.route('/', {
        name:'users.login',
        action() {
            console.log("login route")
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/app',{
        name:'app',
        action(){
            console.log("applayout route")
            mount(MainLayoutCtx,{
                content: () => (<AppLayout />)
            });
        }
    });

    

}
