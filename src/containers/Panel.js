import { Panel } from "../Components";
import { connect } from "react-redux";
import { Fragment } from "react";
import { addPanel } from "../store/actions/panels";
import { addCart } from "../store/actions/carts";
import { DragDropContext } from "react-beautiful-dnd";

const Panels = ({
  index,
  items,
  addPanel,
  addCart,
  removePanel,
  reorderCarts,
}) => {
  const onDragEnd = result => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    reorderCarts({
      source,
      destination
    });
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index) => (
          <Panel
            {...item}
            key={index}
            columnIndex={index}
            onAddPanel={addPanel}
            onAddCart={addCart}
            onRemove={removePanel}
            onReorder={reorderCarts}
          />
        ))}
      </DragDropContext>
      <Panel onAddColumn={addPanel} onAddCard={addCart} />
    </Fragment>
  );
};

export default connect(({ panels }) => panels, { ...addPanel, ...addCart })(
  Panels
);
