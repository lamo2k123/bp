import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
                Contact
            </div>
        )
    }
}

export default {

    path: '/contact',

    action : () => {
        return <Contact />;
    }

};