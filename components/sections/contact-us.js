import styles from './contact-us.module.css'
import { Section, Header, Button } from '../ui'

export function ContactUs() {
  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
  
    // fetch("https://getform.io/f/ff0ef363-a627-4253-a4cd-d2df41ccd55d", {
    //   method: "POST",
    //   body: formData,
    // })
    // .then(console.log)
    // .catch(console.error)
    console.log("Message sent!")
    form.reset()
  }

  return (
    <Section
      className={styles.contactUs}
      id="contact-us"
    >
      <div className={styles.location}>
        <div className={styles.info}>
          <p>
            Kinaxixi, Rua da Muxima - Ingombotas
            <i className='bx bx-current-location'></i>
          </p>
          <p>
            geral@<wbr />radiometodistakairos.com
            <i className='bx bx-envelope'></i>
          </p>
          <p>
            (+244) 943 051 313
            <i className='bx bx-phone'></i>
          </p>
        </div>
      </div>
      <div className={styles.form}>
      <Header.Secondary>Fale Connosco</Header.Secondary>
        <form method='POST' onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Seu nome" name="name" autoComplete='off' required />
            <input type="email" placeholder="Seu email" name="email" autoComplete='off' required />
            <textarea placeholder="Escreva-nos uma mensagem" name="mensagem" required></textarea>
          </div>
          <Button>Enviar</Button>
        </form>
      </div>
    </Section>
  )
}