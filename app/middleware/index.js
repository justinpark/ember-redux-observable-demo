import createSagaMiddleware from 'redux-saga';
import effects from 'ember-redux-observable-demo/effects';

const sagaMiddleware = createSagaMiddleware();

const setup = () => {
  sagaMiddleware.run(effects);
};

export default {
  middleware: [sagaMiddleware],
  setup: setup
};
