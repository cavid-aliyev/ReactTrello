import React from "react";
import { Cart, Button } from "../Components";
import clearIcon from "../assets/clear.svg";
import addIcon from "../assets/add.svg";

interface IAddForm {
  value: any;
  showForm: any;
  setValue: any;
  textareaRef: string;
  setShowForm: any;
  onAdd: any;
  isEmptyPanel: boolean;
}

const AddForm: React.FC<IAddForm> = ({
  value,
  showForm,
  setValue,
  textareaRef,
  setShowForm,
  onAdd,
  isEmptyPanel,
}) => {
  return showForm ? (
    <div className="add-form">
      <div className="add-form__input">
        <Cart>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={isEmptyPanel ? "Enter panel name" : "Enter cart name"}
            ref={textareaRef}
            rows={3}
          />
        </Cart>
        <div className="add-form__bottom">
          <Button
            text={isEmptyPanel ? "Add panel" : "Add cart"}
            onClick={onAdd}
          />
          <img
            onClick={setShowForm.bind(this, false)}
            className="add-form__bottom-clear"
            src={clearIcon}
            alt="Clear svg icon"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="add-form__bottom">
      <div
        onClick={setShowForm.bind(this, true)}
        className="add-form__bottom-add-btn"
      >
        <img src={addIcon} alt="Add svg icon" />
        <span>
          {isEmptyPanel
            ? "Add one more panel"
            : "Add one more cart"}
        </span>
      </div>
    </div>
  );
};

export default AddForm;
