import styles from './button.module.css'

export function Button({ children, ...props }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} {...props}>
        <span className={styles.overlay}>{ children }</span>
      </button>
    </div>
  )
}