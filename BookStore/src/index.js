import React from 'react';
import ReactDOM from 'react-dom';

var InputExample = React.createClass({
  render() {
    return (
      <input type="text" value="Shawn" />
    );
  }
});

ReactDOM.render(<InputExample />, document.getElementById('root'));
