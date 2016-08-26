import style from './style';

import React, { Component, PropTypes } from 'react';

class Html extends Component {

    static displayName = 'Components [html]';

    static defaultProps = {
        store : {}
    };

    static propTypes = {
        store : PropTypes.object.isRequired
    };

    get store() {
        if(this.props.store) {
            const store = JSON.stringify(this.props.store.getState());

            return(
                <script>{`window.__STORE__ = ${store}`}</script>
            )
        }
    }

    render() {
        return(
            <html>
                <head>

                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    <script src="/build/client.js"></script>
                    {this.store}
                </body>
            </html>
        )
    }

}

export { Html as default, style };