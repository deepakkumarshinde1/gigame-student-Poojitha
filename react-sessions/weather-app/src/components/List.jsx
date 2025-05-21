import { Component, memo, PureComponent, useEffect } from "react";
import ListItem from "./ListItem";
import { v4 as keyId } from "uuid";

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // mounting
  componentDidMount() {
    console.log("mounting");
    // api for server
  } // only once

  componentDidUpdate() {
    console.log("updating");
  } // on update

  componentWillUnmount() {
    console.log("unmounting");
  }
  // shouldComponentUpdate() {
  //   /// logic
  //   return false;
  // }

  incCount = () => {
    this.setState((state) => ({ ...this.state, count: this.state.count + 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.incCount}>INC</button>
        <ul>
          {this.props.list.map((value, index) => {
            return <ListItem key={keyId()} index={index} value={value} />;
          })}
        </ul>
      </>
    );
  }
}

export default List;
// Pure Component

// init => memory allocation
// rendering => ui is process for paint
// mounting => adds in react ecosystem => useEffect
// updating => after mounting  there is change in a state or props => useEffect
// unmounting => comp is remove for react ecosystem => useEffect

// comp => memo
// variable => useMemo
// function => useCallback
