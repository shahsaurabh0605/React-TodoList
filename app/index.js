var React = require('react');
var ReactDOM = require('react-dom');
var Bulletin = require('./components/Bulletin');


var Main = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Bulletin App</h1>
                </div>
                <div>
                    <Bulletin />
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));