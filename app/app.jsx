
var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Main = require ('Main');
//var Countdown = require('Countdown');
var Timer = require('Timer');


require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!applicationStyles')

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component={Main}>
            <Route path="timer" component={Timer}/>
            
        </Route>
    </Router>,
    document.getElementById('app')
);