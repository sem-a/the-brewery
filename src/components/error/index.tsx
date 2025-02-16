import React from "react";
import styles from "./index.module.css"; // Импортируем стили

type Props = {
  error: string | null | undefined;
};

const ErrorAlert: React.FC<Props> = ({ error }) => {
  return <div className={styles.alert}>Error: {error}</div>;
};

export default ErrorAlert;
