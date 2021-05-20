import React from "react";
import clearIcon from "../assets/clear.svg";
import { Droppable } from "react-beautiful-dnd";
import Cart from "../containers/Cart";
import AddForm from "../containers/AddForm";

interface IPanel {
  panelIndex?: number;
  title?: string;
  carts?: any[];
  onAddPanel?: any;
  onAddCart?: any;
  onRemove?: any;
  onReorder?: any;
}

const Panel: React.FC<IPanel> = ({
  panelIndex,
  title,
  carts,
  onAddPanel,
  onAddCart,
  onRemove,
  onReorder,
}) => {
  const romovePanel = () => {
    if (global.confirm("Вы действительно хотите удалить колонку?")) {
      onRemove(panelIndex);
    }
  };

  return carts ? (
    <Droppable type="CARDS" droppableId={`panel-${panelIndex}`}>
      {(provided) => (
        <div
          className="panel"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="panel__inner">
            {title && (
              <div className="panel__title">
                <b>{title}</b>
                <div onClick={romovePanel} className="remove-btn">
                  <img src={clearIcon} alt="Clear svg icon" />
                </div>
              </div>
            )}
            <div className="panel__items">
              {carts.map((cart, index) => (
                <Cart key={index} panelIndex={panelIndex} cartIndex={index}>
                  {cart}
                </Cart>
              ))}
              {provided.placeholder}
            </div>
            <AddForm
              isEmptyPanel={false}
              panelIndex={panelIndex}
              onAddPanel={onAddPanel}
              onAddCart={onAddCart}
            />
          </div>
        </div>
      )}
    </Droppable>
  ) : (
    <div className={"panel panel--empty"}>
      <div className="panel__inner">
        <AddForm
          isEmptyPanel={true}
          panelIndex={panelIndex}
          onAddPanel={onAddPanel}
          onAddCart={onAddCart}
        />
      </div>
    </div>
  );
};

export default Panel;
