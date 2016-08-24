import style from './style';

import React, { Component } from 'react';

class Html extends Component {

    static displayName = 'Components [html]';

    static defaultProps = {

    };

    static propTypes = {

    };
    
    render() {
        return(
            <html>
                <head>

                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    <script src="/build/client.js"></script>
                </body>
            </html>
        )
    }

}

export { Html as default, style };