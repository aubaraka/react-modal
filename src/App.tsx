import React, { useContext } from "react";
import ModalProps from "./types";
import { ModalContext } from "./context";
import { Modal } from "./component/modal";

function App() {
  const [openModal, closeModal] = useContext(ModalContext);
  const randomLevel = () =>
    ["info", "warning", "error"][Math.floor(Math.random() * 3)];

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {/* <Modal title="test" content={"testss"} level="warning" />; */}
      <button
        onClick={() =>
          openModal({
            title: "Hi!",
            content: "Hello World!",
            level: randomLevel(),
          } as ModalProps)
        }
      >
        Open Modal
      </button>
    </div>
  );
}

export default App;
