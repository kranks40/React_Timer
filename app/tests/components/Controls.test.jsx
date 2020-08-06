var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var  $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
    it('Should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('Should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1)
        });

        it('Should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);
        });
    });
});