import { createStore, compose } from 'redux';  
      import rootReducer from './reducers';  
      export default createStore(  
        rootReducer,  
        undefined,  
        compose(   window.devToolsExtension ? window.devToolsExtension() : f => f  
                )  
      );  