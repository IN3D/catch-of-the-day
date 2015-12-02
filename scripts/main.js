var React = require('react');
var ReactDOM = require('react-dom');

/*
	App
 */

var App = React.createClass({
	render : function() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
});

/*
	header
	<Header />
 */

var Header = React.createClass({
	render : function() {
		return (
			<p>Header</p>
		)
	}
});

/*
	Order
	<Order />
 */

var Order = React.createClass({
	render : function () {
		return (
			<p>Order</p>
		)
	}
});

/*
	Inventory
	<Inventory />
 */

var Inventory = React.createClass({
	render : function () {
		return (
			<p>Inventory</p>
		)
	}
});

/*
StorePicker
 */

var StorePicker = React.createClass({

	render : function(){
		var name = "name";
		return(
			<form className="store-selector">
			{/* example comment inside JSX */}
				<h2>Please Enter a store {name}</h2>
				<input type="text" ref="storeId" required/>
				<input type="Submit" />
			</form>
		)
	}
});

ReactDOM.render(<App/>, document.querySelector('#main'));