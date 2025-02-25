import React, { Component } from 'react';

interface State {
  pressedKey: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pressedKey: 'Nothing was pressed yet',
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is ${event.key}`,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.pressedKey}</h1>
      </div>
    );
  }
}

export default App;
