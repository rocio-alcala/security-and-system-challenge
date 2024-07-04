import styles from "../components/Errors.module.css";

interface ErrorsTypeProps {
  message: undefined | string;
}

export default function Errors({ message }: ErrorsTypeProps) {
  return <>{message ? <p className={styles.error}>{message}</p> : null}</>;
}
