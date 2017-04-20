// import createSagaMiddleware from 'redux-saga';
// import effects from 'ember-redux-observable-demo/effects';

// const sagaMiddleware = createSagaMiddleware();

// const setup = () => {
//   sagaMiddleware.run(effects);
// };

// export default {
//   middleware: [sagaMiddleware],
//   setup: setup
// };

import ReduxObservable from 'npm:redux-observable';
import rootEpic from 'ember-redux-observable-demo/epics';

const { createEpicMiddleware } = ReduxObservable;
const epicMiddleware = createEpicMiddleware(rootEpic);

export default [epicMiddleware];
