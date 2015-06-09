var React = require('react');
var Container = require('react-container');

var App = React.createClass({
	render () {
		var items = [];
		for (var i = 0; i < 42; i++) items.push(i);
		return (
			<div style={{ background: '#eee', width: 480, height: 540, padding: 10 }}>
				<Container fill style={{ background: 'white' }}>
					<Container direction="column">
						<Container style={{ background: '#ddd' }}>Header</Container>
						<Container style={{ background: 'white' }} fill>
							<Container scrollable>
								{items.map((i) => {
									return <div style={{ padding: 10 }}>Item {i}</div>;
								})}
							</Container>
						</Container>
					</Container>
				</Container>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
