import styles from './recorded-audios.module.css'
import { Header } from '../ui/'

export function RecordedAudios() {
  return (
    <div className={[
      styles.audios,
      styles.shaddow
    ].join(" ")}>
      <Header.Secondary>Áudios Gravados</Header.Secondary>
      <p>
        Nós preparamos uma lista de áudios especialmente para você.
        Esperamos que aprecie!
      </p>
      <div className={styles.wrapper}>
        <div className={styles.audio}>
          <div className={styles.audioName}>Audio #1</div>
          <div className={styles.description}>Uma descrição para este áudio</div>
          <button className={styles.player}>Ouvir</button>
        </div>
        <div className={styles.audio}>
          <div className={styles.audioName}>Audio #2</div>
          <div className={styles.description}>Uma descrição para este áudio</div>
          <button className={styles.player}>Ouvir</button>
        </div>
        <div className={styles.audio}>
          <div className={styles.audioName}>Audio #3</div>
          <div className={styles.description}>Uma descrição para este áudio</div>
          <button className={styles.player}>Ouvir</button>
        </div>
      </div>
    </div>
  )
}