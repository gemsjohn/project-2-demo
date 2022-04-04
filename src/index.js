import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Handlebars from 'handlebars';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

var source = document.getElementById("entry-template");
var template = Handlebars.compile(`
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
`);
source.innerHTML = template({ title: "My New Post", body: "This is my first post!" });