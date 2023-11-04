import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  const buttonStyle = {
    backgroundColor: "#007bff", // Replace with the desired background color
    // You can also define other inline styles here, like text color, padding, etc.
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal} style={buttonStyle}>
        Add new task
      </button>
    </>
  );
};

export default BtnAddTask;
