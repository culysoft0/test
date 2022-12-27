import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Menu, AboveTheFold, WhoWeAre, RecordedAudios, OurTeam, ContactUs } from '../components/sections'
import { SocialMediaButton } from '../components/ui'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rádio Kairós - 98.3 FM</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <AboveTheFold />
      <WhoWeAre />
      <RecordedAudios />
      <OurTeam />
      <ContactUs />
      {/* Social Medias */}
      <SocialMediaButton />
      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.copy}>
          &copy; Copyright Kairós { (new Date()).getFullYear() }
        </p>
        <p className={styles.powered}>
          Powered By&nbsp;&nbsp;
          <a href="https://www.culysoft.com">
            <Image
              src="/images/logos/culysoft-logo.png"
              alt="Logo da Culysoft"
              width={20}
              height={20}
            />
          </a>
          &nbsp;&nbsp;Culysoft
        </p>
      </div>
      <Script
        src="/scripts/scrollspy.js"
      />
    </div>
  )
}
