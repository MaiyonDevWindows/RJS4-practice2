import React, { Component } from 'react'
import Box from './Box.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }

  onRemoveBox = () => {
    this.setState({ isDisplay: false });
  }

  render() {
    return (
      <div className="container">
        {this.state.isDisplay && <Box></Box>}
        <div onClick={this.onRemoveBox}>Xoá ComponentBox</div>
      </div>
    )
  }
}

export default App;