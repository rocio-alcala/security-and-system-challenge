import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";
import styles from "../components/InputTextArea.module.css";

interface InputTextAreaSpecificProps {
  id: string | number;
  errors?: string;
  label?: string;
  required?: boolean;
}

const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea"> & InputTextAreaSpecificProps
>(({ label, errors, required, ...props }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label>
        {label && (
          <legend>
            {label}
            {required && <span>*</span>}
          </legend>
        )}
        <textarea
          ref={ref}
          aria-label={label}
          {...props}
          className={styles.input}
        />
      </label>
      <Errors message={errors} />
    </div>
  );
});

export default InputTextArea;
