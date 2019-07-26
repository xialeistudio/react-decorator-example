import React, { PureComponent } from 'react';

function Component<T extends { new(...args: any[]): any }>(component: T) {
  return class extends component {
    handleClick() {
      super.handleClick()
      console.log('child clicked');
    }
    render() {
      const parent = super.render()
      return React.cloneElement(parent, { onClick: this.handleClick })
    }
  }
}

@Component
export default class App extends PureComponent {
  handleClick() {
    console.log('parent click');
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick}>parent</div>
    );
  }
}