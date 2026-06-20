import styles from "./button.module.css";

export function Button({ onClick,disabled, children }) {
  return (
    <button onClick={onClick}
      disabled={disabled}
    className={styles.container}
    style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {children}
    </button>
  );
}