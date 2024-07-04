import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";
import styles from "../components/InputText.module.css";

interface InputTextSpecificProps {
  id: string | number;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, required, className, ...props }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label>
        {label && (
          <legend>
            {label}
            {required && <span>*</span>}
          </legend>
        )}
        <input
          className={styles.input}
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
    </div>
  );
});

export default InputText;
