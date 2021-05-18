import { Panel } from "../Components";
import { connect } from "react-redux";
import { Fragment } from "react";
import { addPanel } from "../store/actions/panels";
import { addCart } from "../store/actions/carts";

const Panels = ({ items, addPanel, addCart }) => (
  <Fragment>
    {items.map((item, index) => (
      <Panel key={index} {...item} onAddPanel={addPanel} onAddCart={addCart}/>
    ))}
    <Panel addPanel={addPanel} addCart={addCart}/>
  </Fragment>
);

export default connect(({ panels }) => panels, { ...addPanel, ...addCart })(
  Panels
);
