import React from "react";
import { Cart, Button } from "../Components";
import clearIcon from "../assets/clear.svg";
import addIcon from "../assets/add.svg";

interface IAddForm {
  isEmptyPanel: boolean;
  // ?create
  onAdd?: any
}

const AddForm: React.FC<IAddForm> = ({onAdd,  isEmptyPanel }) => {
  const [showForm, setShowForm] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  React.useEffect(() => {
    textareaRef.current?.focus();
  }, [showForm]);

  return (
    <>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Cart>
              <textarea
                ref={textareaRef}
                rows={3}
                placeholder={
                  isEmptyPanel ? "Create column" : "Enter a title for this card"
                }
              ></textarea>
            </Cart>
            <div className="add-form__bottom">
              <Button text={
                  isEmptyPanel ? "Add column" : "Add cart"
                } />
              <img
                onClick={handleShowForm}
                className="add-form__bottom-clear"
                src={clearIcon}
                alt="Clear svg Icon"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="panel__bottom">
          <div className="panel__bottom-add-btn">
            <img src={addIcon} alt="Plus" />
            <span onClick={handleShowForm}>{
                  isEmptyPanel ? "Create another column" : "Add another cart"
                }</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AddForm;
