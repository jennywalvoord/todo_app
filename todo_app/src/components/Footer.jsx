import styles from "./footer.module.css";

export default function Footer({ doneTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed Todos: {doneTodos}/{totalTodos}
      </span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
