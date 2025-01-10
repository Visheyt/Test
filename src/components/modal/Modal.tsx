import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { FC, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};
export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return;
  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>{children}</div>
    </div>,
    document.body
  );
};
