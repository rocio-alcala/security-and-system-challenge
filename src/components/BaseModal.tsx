import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import styles from "../components/BaseModal.module.css";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BaseModal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<BaseModalProps>) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") onClose();
  }

  const closeMenu = useCallback(
    (event: MouseEvent) => {
      // since the <dialog> element takes the whole screen
      // target inside the dialog will be one of <dialog> children
      // only close when target is dialog (outside <dialog>)
      if (modalRef.current && modalRef.current === event.target) {
        onClose();
      }
    },
    [onClose],
  );

  // add event listener for close on click outside
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [closeMenu]);

  // used to sync with dialog API
  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      className={`${styles.dialog}`}
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      <div>{children}</div>
    </dialog>
  );
}
