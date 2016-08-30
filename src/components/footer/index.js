import style from './style';

import React, { Component, PropTypes } from 'react';

class Footer extends Component {

    static contextTypes = {

    };

    static propTypes = {

    };

    render() {
        return(
            <footer className={style['footer']}>
                <span className={style['footer__license']}>MIT license</span>
                <div>aa</div>
            </footer>
        );
    }

}

export { Footer as default, style };