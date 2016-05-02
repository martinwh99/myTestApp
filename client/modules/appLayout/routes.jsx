/**
 * Created by martin on 12.04.2016.
 */

import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '../appLayout/components/appLayout.jsx';

export default function (injectDeps, {FlowRouter}) {
      const AppLayoutCtx = injectDeps(AppLayout);

      const appSection = FlowRouter.group({
            prefix: "/app"
      });

   
}