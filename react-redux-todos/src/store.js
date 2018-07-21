import { createStore, applyMiddleware, compose } from 'redux'; 

      import rootReducer from './reducers'; 
      const middleware = [

      ] ;
      export default createStore(  
        rootReducer,  
        undefined,  
        compose(  applyMiddleware(...middleware),  window.devToolsExtension ? window.devToolsExtension() : f => f  
                )  
      );  