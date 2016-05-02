/**
 * Created by martin on 02.05.2016.
 */

import {createApp} from 'mantra-core';
import initContext from './configs/context';

//modules
import coreModule from './modules/core';
import layoutModule from './modules/appLayout';
import logonModule from './modules/logon';

//init context
const context = initContext();

//create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(layoutModule);
app.loadModule(logonModule);


app.init();