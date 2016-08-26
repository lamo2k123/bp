import style from './style';

import React, { Component, PropTypes } from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

class DevTools extends Component {

    static contextTypes = {
        store : PropTypes.object.isRequired
    };

    static propTypes = {

    };

    get tools() {
        return createDevTools(
            <DockMonitor toggleVisibilityKey="H" changePositionKey="Q">
                <LogMonitor />
            </DockMonitor>
        );
    }

    render() {
        console.log('YY', 'aaaaaaa', this.tools);
        return(
            <div className={style['test']}>
                {this.tools}
            </div>
        );
    }

}

export { DevTools as default, style };