import React from 'react';
import { render } from 'react-dom';
import { resolve } from 'universal-router';
import history from 'core/history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from 'route';


const store = createStore(() => 0, window.__STORE__);

const removeHistoryListener = history.listen(function(location) {
    console.log(location, 'HERE');
    resolve(routes, {
        path: location.pathname,
        query: location.query,
        state: location.state,
        // context,
        render: component => <Provider store={store}>{component}</Provider> // eslint-disable-line react/jsx-no-bind, max-len
    })
        .then(
            component => {
                render(component, document.getElementById('app'))
            },
            console.log
        );
});

history.replace(history.getCurrentLocation());

// render(, document.getElementById('app'));