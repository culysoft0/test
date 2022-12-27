import styles from './social-media.module.css'
import { useState } from 'react'

export function SocialMediaButton() {
  const [clicked, setClicked] = useState(false)
  
  function handleClick() {
    setClicked(!clicked)
  }

  return (
    <div className={[
      styles.wrapper,
      clicked ? styles.clicked : ""
      ].join(" ")}
    >
      <div className={styles.social}>
        <a href="https://www.facebook.com" target="_blank" className='bx bxl-facebook'></a>
        <a href="https://www.whatsapp.com" target="_blank" className='bx bxl-whatsapp'></a>
        <a href="https://www.instagram.com" target="_blank" className='bx bxl-instagram'></a>
      </div>
      <button
        className={[
          'bx bx-share-alt',
          styles.button
        ].join(" ")}
        onClick={handleClick}
      ></button>
    </div>
  )
}