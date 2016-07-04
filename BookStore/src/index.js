import React from 'react';
import ReactDOM from 'react-dom';

var InputExample = React.createClass({
  getInitialState() {
    return (
      { name: '-'}
    );
  },
  handleChange(event) {
    this.setState({ name: event.target.value });
  },
  render() {
    return (
      <input type="text" value={this.state.name} onChange={this.handleChange} defaultValue="Shawn"/>
    );
  },
  handleChange: function(event) {
    this.setState({name: event.target.value.toUpperCase()});
  }
});

ReactDOM.render(<InputExample />, document.getElementById('root'));
