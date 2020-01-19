// import React from "react";
import * as React from "react";

interface Props {}

interface State {
  count: number;
}

// componentWillMount、componentWillUpdateは非推奨（v17.0で削除予定）
class AppClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        {this.state.count}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
      </>
    );
  }
}

export default AppClass;

