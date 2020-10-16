import React, {Suspense} from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import Loader from 'react-loader-spinner';
// import './i18n';
// import serviceWorker from './serviceWorker'

render(
    <Suspense>
      <Routes />
    </Suspense>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
