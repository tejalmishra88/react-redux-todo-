import { createStore, applyMiddleware, compose } from 'redux'; 

      import rootReducer from './reducers'; 
      const middlewares = [

      ] ;
      export default createStore(  
        rootReducer,  
        undefined,  
        compose(  applyMiddleware(...middlewares),  window.devToolsExtension ? window.devToolsExtension() : f => f  
                )  
      );  