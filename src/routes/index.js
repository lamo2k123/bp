import React from 'react';
import App from 'component/app';

import test from 'route/test';

// Child routes
/*import home from './home';
import contact from './contact';
import login from './login';
import register from './register';
import content from './content';
import error from './error';*/

export default {
    path    : '/',
    children: [
        test
/*        home,
        contact,
        login,
        register,

        // place new routes before...
        content,
        error,*/
    ],

    action  : ({ next, render, context }) => {
        // console.log('action', next, render, context);
        const component = next();

        return component
            .then(
                result => {
                    return render(
                        <App context={context}>{result}</App>)

                },
                console.log
            );
    }

};