import styles from './above-the-fold.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { PlayerModal, Section, Header, Button } from '../ui/'

export function AboveTheFold() {
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <Section
      className={[
        styles.aboveTheFold
      ]}
      id="home"
    >
      <Header.Primary>Uma rádio <br /> feita para si!</Header.Primary>
      <p>Buscamos conquistar o público para o qual comunicamos</p>
      <Button
        onClick={handleOpen}
      >
        Começar a ouvir
      </Button>
      <a href="https://www.culysoft.com"
        className={styles.logo}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/logos/culysoft-logo.png"
          alt="Logo da Culysoft"
          width={60}
          height={60}
        />
      </a>
      <PlayerModal
        open={open}
        handleClick={handleClose}
      />
    </Section>
  )
}