import React from 'react';

class FullpageLoader extends React.Component {
  state = {
    value: 0
  };

  loader = {};

  componentDidMount() {
    this.loader = setInterval(() => {
      this.setState(prevState => ({ value: prevState.value + 1 }));
    }, 0);
  }

  componentDidUpdate() {
    if (this.state.value === 100) {
      clearInterval(this.loader);
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            minHeight: '80vh',
            paddingTop: '25rem',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <progress
              className="progress is-large is-danger"
              value={this.state.value}
              max="100"
            />
          </div>
        </div>
      </>
    );
  }
}

export default FullpageLoader;
