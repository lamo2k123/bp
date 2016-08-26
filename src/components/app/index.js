import style from './style';

import React, { Component, PropTypes } from 'react';
import history from 'core/history';

class App extends Component {

    static contextTypes = {
        store : PropTypes.object.isRequired
    };

    static propTypes = {

    };

    onClick = e => {
        e.preventDefault();

        history.push({
            pathname : '/contact',
            state: { test : 'state' }
        })
    };

    render() {
        console.log('YY', this.context.store);
        return(
            <div className={style['test']}>
                <div onClick={this.onClick}>header</div>
                {this.props.children}
                <div>footer</div>
            </div>
        );
    }

}

export { App as default, style };