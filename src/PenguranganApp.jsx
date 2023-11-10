import React from "react";

function MenampilkanPengurangan({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }
  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }
  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }
  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
}

function ButtonPengurangan({ kurangi }) {
  return (
    <div>
      <button onClick={kurangi}>- kurangi</button>
    </div>
  );
}

function ButtonReset100({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

class PenguranganApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 100,
    };
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onDecreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 100,
      };
    });
    // this.setState({
    //   count: 100,
    // });
  }

  render() {}

  render() {
    return (
      <div>
        <ButtonPengurangan kurangi={this.onDecreaseEventHandler} />
        <MenampilkanPengurangan count={this.state.count} />
        <ButtonReset100 reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default PenguranganApp;
