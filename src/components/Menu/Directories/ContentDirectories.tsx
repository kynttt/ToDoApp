import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalDirectory from "../../Utilities/ModalDirectory";
import ItemDirectory from "./ItemDirectory";

const ContentDirectories: React.FC<{ classActive: string }> = ({
  classActive,
}) => {
  const directories = useAppSelector((store) => store.tasks.directories);
  const [modalDirIsShown, setModalDirIsShown] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const createNewDirectoryHandler = (inputValue: string) => {
    const newDirectoryName: string = inputValue.trim();

    if (newDirectoryName.length === 0) return;

    const directoryDoesNotExist = directories.every(
      (dir: string) => dir !== newDirectoryName
    );

    if (directoryDoesNotExist) {
      dispatch(tasksActions.createDirectory(newDirectoryName));
    }
  };

  const closeModalDirectoryHandler = () => {
    setModalDirIsShown(false);
  };

  const buttonStyle = {
    backgroundColor: "#007bff", // Replace with the desired background color
    // You can also define other inline styles here, like text color, padding, etc.
  };

  return (
    <>
      {modalDirIsShown && (
        <ModalDirectory
          onClose={closeModalDirectoryHandler}
          onConfirm={createNewDirectoryHandler}
          btnText="Create"
          title="Create new directory"
        />
      )}

      <ul className="max-h-36 overflow-auto">
        {directories.map((dir: string) => (
          <ItemDirectory key={dir} classActive={classActive} dir={dir} />
        ))}
      </ul>
      <button
        onClick={() => setModalDirIsShown(true)}
        className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 ml-9 mt-2 rounded-md border-dashed hover:text-violet-500"
        style={buttonStyle}
      >
        + New
      </button>
    </>
  );
};

export default ContentDirectories;
