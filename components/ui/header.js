import styles from './header.module.css'

function Primary({ children }) {
  return (<h1 className={styles.primary}>{ children }</h1>)
}

function Secondary({ children }) {
  return (<h2 className={styles.secondary}>{ children }</h2>)
}

function Tertiary({ children }) {
  return (<h2 className={styles.tertiary}>{ children }</h2>)
}

export const Header = {
  Primary,
  Secondary,
  Tertiary
}