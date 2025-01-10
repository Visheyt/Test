import { useState } from "react";
import styles from "./cookies-modal.module.css";

export const CookiesModal = () => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  if (!isOpen) return;

  return (
    <div className={styles.container}>
      <h3>We use cookies</h3>
      <div className="buttons">
        <button className="yes" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
};
