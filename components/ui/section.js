import styles from './section.module.css'

export function Section({ children, className, ...props }) {
  return (
    <section
      {...props}
      className={
        [styles.section].concat(className).join(" ")
      }
    >
      { children }
    </section>
  )
}