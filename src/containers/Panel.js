import { Panel } from "../Components";
import { connect } from "react-redux";
import { Fragment } from "react";

const Panels = ({ items }) => (
  <Fragment>
    {items.map((item, index) => (
      <Panel key={index} {...item} />
    ))}
    <Panel/>
  </Fragment>
);

export default connect(({ panels }) => panels)(Panels);
