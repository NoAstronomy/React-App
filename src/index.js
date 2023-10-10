import './index.css';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from  'react-dom/client';
import App from './components/App/App';

let renderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    debugger;
    root.render(
        <App 
            state = {state}
            store={store}
            dispatch={store.dispatch.bind(store)} />
    );
}

renderTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    renderTree(state);
});