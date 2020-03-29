import React from 'react';
import ReactDOM from 'react-dom';

class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }
  // 通过onClick事件触发懒加载
  loadComponent() {
    import('./text').then(result => {
      this.setState({
        text: result.text
      });
    });
  }
  render() {
    const {text} = this.state;
    return (
      <div>
        <p>{text ? text : null}</p>
        <p onClick={() => this.loadComponent()}>Spilt Code Test</p>
      </div>
    );
  }
}

ReactDOM.render(<Split />, document.getElementById('root'));
