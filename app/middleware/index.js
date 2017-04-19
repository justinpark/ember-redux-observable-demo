import createSagaMiddleware from 'redux-saga';
import userEffects from 'ember-redux-observable-demo/effects/user/read';

const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run(userEffects);

export default [sagaMiddleware];
