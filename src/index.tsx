import './index.css';
import reportWebVitals from './reportWebVitals';
import { RootStateType, state, subscribe} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, updateNewPostText} from './redux/state';

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
          />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  

renderTree(state);

subscribe(renderTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
