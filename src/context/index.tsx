import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";
import { Modal } from "../component/modal";
import ModalProps from "../types";

export const ModalContext = createContext<
  [(modal: ModalProps) => unknown, () => unknown]
>([() => console.log("Open modal"), () => console.log("Close modal")]);

function ModalContextProvider({ children }: any) {
  const [modal, setModal] = useState<ModalProps | undefined>();

  const openModal = (modalProps: ModalProps) => setModal(modalProps);
  const closeModal = () => setModal(undefined);

  return (
    <ModalContext.Provider value={[openModal, closeModal]}>
      {children}
      <AnimatePresence>
        {modal && <Modal key="modal" {...modal} />}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
