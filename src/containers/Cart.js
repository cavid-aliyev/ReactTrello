import { Cart } from "../Components";
import { connect } from "react-redux";
import { addCart } from "../store/actions/carts";

export default connect(
  ({ panel }) => panel,
  (dispatch) => ({
    onRemove: (panelIndex, cartIndex) => {
      if (global.confirm("Do you really wanna delete?")) {
        dispatch(addCart.removeCard(panelIndex, cartIndex));
      }
    },
  })
)(Cart);
