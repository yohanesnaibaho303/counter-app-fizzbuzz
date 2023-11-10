import React from "react";

function DisplayCounter({ count }) {
  return <p>{count}</p>;
}

function ButtonIncrease({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}

function ButtonDecrease({ decrease }) {
  return (
    <div>
      <button onClick={decrease}>- Decrease</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}> RESET</button>
    </div>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  onDecreaseEventHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <ButtonIncrease increase={this.onIncreaseEventHandler} />
        <ButtonDecrease decrease={this.onDecreaseEventHandler} />
        <DisplayCounter count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default CounterApp;
