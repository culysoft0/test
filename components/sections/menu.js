import Link from 'next/link'
import Image from 'next/image'
import styles from './menu.module.css'
import { useState } from 'react'

export function Menu() {
  const [hidden, setHidden] = useState(true)

  function handleClick() {
    setHidden(!hidden)
  }
  
  const items = [
    { name: 'Home', location: '/' },
    { name: 'Quem Somos', location: '/#who-we-are' },
    { name: 'Nosso Team', location: '/#our-team' },
    { name: 'Contacte-nos', location: '/#contact-us' },
  ]

  const logo = {
    src: '/images/logos/kairos-logo.png',
    size: { x: 110, y: 57},
    alt: 'Logo da Rádio Kairós'
  }

  return (
    <div className={[
      styles.wrapper,
      !hidden ? styles.menuOpen : ''
    ].join(" ")}>
      <ul className={styles.menu}>
        {
          items.map(item => (
            <li key={item.location}>
              <Link href={item.location}>
                <a onClick={handleClick}>{ item.name }</a>
              </Link>
            </li>
          ))
        }
      </ul>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.size.x}
            height={logo.size.y}
          />
        </a>
      </Link>
      <div className={styles.hamburguer}>
        <button
          className={!hidden ? 'bx bx-x' : 'bx bx-menu' }
          onClick={handleClick}
        >
        </button>
      </div>
    </div>
  )
}