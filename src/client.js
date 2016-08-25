import { render } from 'react-dom';
import { resolve } from 'universal-router';
import history from 'core/history';

import routes from 'route';

const removeHistoryListener = history.listen(function(location) {
    console.log(location);
    resolve(routes, {
        path: location.pathname,
        query: location.query,
        state: location.state,
        // context,
        render: component => component // eslint-disable-line react/jsx-no-bind, max-len
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