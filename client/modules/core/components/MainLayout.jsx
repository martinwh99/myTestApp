import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import i18n_startup from './../configs/i18n_startup';

injectTapEventPlugin()
i18n_startup()

const Layout = ({content}) => (

    <div >
        <div>
            {content()}
        </div>
    </div>

);

export default Layout;