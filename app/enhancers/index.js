/**
 * Enables the redux devTools on the development environment
 */
import config from '../config/environment';
import redux from 'redux';

const DEV_ENV = 'development';
const devtools = (()=> {
  if (config.environment === DEV_ENV && window.devToolsExtension) {
    return window.devToolsExtension();
  }
  return f => f;
})();

export default redux.compose(devtools);
