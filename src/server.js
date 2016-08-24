import http from 'http';
import https from 'https';
import express from 'express';
import React from 'react';
import cookieParser from 'cookie-parser';
import { urlencoded, json } from 'body-parser';
import { resolve } from 'universal-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import routes from './routes/index';
import config from './../configs';
import Html from 'component/html';

const app = express();

app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('*', (req, res, next) => {
    console.log(1111111111)
    let statusCode = 200;
/*
        let css = [];

        const data = { title: '', description: '', style: '', script: assets.main.js, children: '' };
*/


        resolve(routes, {
            path    : req.path,
            query   : req.query,
            context : {
/*                insertCss: (...styles) => {
                    styles.forEach(style => css.push(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
                },
                setTitle: value => (data.title = value),
                setMeta: (key, value) => (data[key] = value),*/
            },
            render : component => {
                console.log('RENDER', component);
                // statusCode = status;
/*                data.children = ReactDOM.renderToString(component);
                data.style = css.join('');*/
                return component;
            }
        }).then(
            component => {
                console.log('RESOLVE', component);
                const props = {
                    children : renderToString(component)
                };

                console.log('props', props);

                const html = renderToStaticMarkup(<Html {...props} />);

                console.log('RES');
                res.status(200);
                res.send(`<!doctype html>${html}`);
            },
            error => {
                console.log('error', error);
            }
        );


});

let server = app;

if(config.server.protocol == 'https') {
    server = https.createServer(config.server.options, app);
} else {
    server = http.createServer(app);
}

server.listen(config.server.port, config.server.hostname, config.server.backlog, () => {
    console.log('Listen port %s, hostname %s, backlog %s', config.server.port, config.server.hostname, config.server.backlog);
});