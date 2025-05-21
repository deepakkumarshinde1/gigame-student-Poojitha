import { Component, PureComponent } from "react";
import { withParams } from "./hoc/withParams";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("Product props");
    return (
      <>
        <h1>
          Hello {this.props.params.id} {this.props.text}
        </h1>
      </>
    );
  }
}

export default withParams(Product);
