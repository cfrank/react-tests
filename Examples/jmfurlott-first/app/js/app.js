var Test = React.createClass({
	render: function(){
		return(
			<p>Hello</p>
		);
	}
});

React.render(
	<Test />,
	document.getElementById("content")
);