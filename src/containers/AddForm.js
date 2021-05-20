import { useState, useRef, useEffect } from "react";
import { AddForm as AddFormBase } from "../Components";

const AddForm = ({ panelIndex, onAddCart, onAddPanel, isEmptyPanel }) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const onAdd = () => {
    if (isEmptyPanel) {
      onAddPanel(value);
    } else {
      onAddCart(panelIndex, value);
    }
    setValue("");
    setShowForm(false);
  };

  return (
    <AddFormBase
      onAdd={onAdd}
      showForm={showForm}
      setShowForm={setShowForm}
      value={value}
      setValue={setValue}
      textareaRef={textareaRef}
    />
  );
};

export default AddForm;
