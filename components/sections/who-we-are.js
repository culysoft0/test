import styles from './who-we-are.module.css'
import Image from 'next/image'
import { Section, Header } from '../ui/'

export function WhoWeAre() {
  return (
    <Section
      className={[
        styles.aboutUs
      ]}
      id="who-we-are"
    >
      <div className={styles.ourValues}>
        <Image
          src="/images/sections/broadcaster.png"
          width={780}
          height={480}
          alt="Foto de um Radialista"
        />
        <div className={styles.content}>
          <Header.Tertiary>Nossos Valores</Header.Tertiary>
          <span>
            <i className='bx bx-radio-circle bx-burst'></i>
            <p>Promover a cidadania, o engajamento social, político e religioso.</p>
          </span>
          <span>
            <i className='bx bx-right-arrow bx-fade-left'></i>
            <p>Fomentar a vida comunitária e as boas relações humanas.</p>
          </span>
          <span>
            <i className='bx bx-x bx-spin'></i>
            <p>Trabalhar em prol da paz, da prosperidade e da verdade.</p>
          </span>
        </div>
      </div>
      <div className={styles.ourMissionAndGoals}>
        <div className={styles.content}>
          <Header.Tertiary>Nossa Missão</Header.Tertiary>
          <p>
            A Rádio Kairós tem primado pela credibilidade dos seus serviços
            noticiosos, para além de salvagurdar com êxito a missão de evengelizar
            o maior número possível de angolanos, e não só, dentro e fora do pa<wbr />ís,
            através da antena e Internet, respectivamen<wbr />te.
          </p>
          <Header.Tertiary>Nossos Objectivos</Header.Tertiary>
          <p>
            A tendência é progredirmos mais e mais, fazer vincar
            o nosso espírito de comprometimento para com o público
            ouvinte de forma específica, e para com a nação de forma genérica.
          </p>
        </div>
        <Image
          src="/images/sections/listen-to-music.png"
          width={780}
          height={480}
          alt="Pessoa ouvindo música"
        />
      </div>
    </Section>
  )
}