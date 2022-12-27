import styles from './player.module.css'

export function PlayerModal({ open, handleClick }) {
  return (
    <div className={[
      styles.wrapper,
      open ? styles.visible : ""
    ].join(" ")}
    >
      <button className={[
        'bx bx-x',
        styles.closeBtn
        ].join(" ")}
        onClick={handleClick}
      ></button>
      <div className={styles.modal}>
        <div className={styles.image}></div>
        <div className={styles.controls}>
          <div className={styles.buttons}>
            <audio controls id='control'>
              <source src="http://stream.zeno.fm/zk8zpprk0k0uv" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
      </div>
    </div>
  )
}