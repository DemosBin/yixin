import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
var _ = require('lodash');

import App from './components/App';
import Detail from './components/Detail'
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';

import './index.less';

/*class Index extends React.Component {
  render() {
    return (
      <div className="body">
        <h1>Stages list</h1>
        <ul role="nav">
          <li><Link to="/s1">ListView + Carousel</Link></li>
          <li><Link to="/s2">Tabs + ...</Link></li>
          <li><Link to="/s3">Form + ...</Link></li>
        </ul>
      </div>
    );
  }
}*/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/s2" component={Stage2} />
      <Route path="s3" component={Stage3} />
    </Route>
    <Route path="/detail" component={Detail} >
    </Route>
  </Router>
, document.getElementById('example'));