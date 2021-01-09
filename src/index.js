import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers' ;
import { act } from '@testing-library/react';
import thunk from 'redux-thunk' ;

// curried form of function logger(obj,next,action)

// const logger = function({dispatch,getState}){
//   return function(next) {
//     return function(action){
//       // middleware code
//       console.log('ACTION_TYPE: ', action.type) ;
//       next(action) ; // imp else code will get stuck
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action) => {
  // logger code
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE: ', action.type) ;
  }
  next(action) ;
}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   // logger code
//   if(typeof action === 'function'){
//     action(dispatch) ;
//     return ;
//   }
//   next(action) ;
// }

const store = createStore(rootReducer,applyMiddleware(logger , thunk));
console.log('store' , store.getState()) ;

export const StoreContext = createContext() ;

class Provider extends React.Component {
  render(){
    const {store} = this.props ;

    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider> 
  }
}

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider> ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
