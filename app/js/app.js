var Timer = React.createClass({
	getInitialState: function(){
		return {
			fifteen: false,
			secondsElapsed: 0,
			looped: 0
		};
	},
	tick: function(){
		if(this.state.secondsElapsed === 5){
			this.setState({
				fifteen: true,
				secondsElapsed: 0,
				looped: ++this.state.looped
			});
		}
		else{
			this.setState({
				secondsElapsed: ++this.state.secondsElapsed,
				fifteen: false
			});
		}
	},
	onPress: function(){
		this.replaceState(this.getInitialState())
	},
	// Add a 's' to the word if the count is larger than 1
	pluralize: function(count, word){
		return count === 1 ? word : word + 's';
	},
	componentDidMount: function(){
		this.interval = setInterval(this.tick, 1000);
	},
	componentDidUnmount: function(){
		clearInterval(this.interval);
	},
	render: function(){
		return(
			<div id="secondsContainer">
				<p>Seconds Elapsed: {this.state.secondsElapsed}</p>
				<div id="bottom" className={this.state.looped > 0 ? 'show' : ''}>
					<div id="alertContainer">
						<span className={ this.state.fifteen ? 'show' : ''}>The timer is now at 5 seconds!</span>
					</div>
					<div id="loopContainer">
						<span className={ this.state.looped > 0 ? 'show' : ''}>
							{'The application has looped ' + this.state.looped + ' ' + this.pluralize(this.state.looped, "time")}
						</span>
					</div>
				</div>
				<button onClick={this.onPress}>Reset!</button>
			</div>
		);
	}
});

React.render(
	<Timer />,
	document.getElementById("container")
)