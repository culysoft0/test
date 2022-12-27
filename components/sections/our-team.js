import styles from './our-team.module.css'
import Image from 'next/image'
import { Section, Header } from '../ui'
import React, { Component } from "react";
import Slider from "react-slick";

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            slidesPerRow: 1
          }
        }
      ]
    };

    return (
      <div className={styles.gallery}>
        <Slider {...settings}>
          <Image
            src="/images/people/image-1.jpg"
            alt="3 de nossos functionários"
            width={375}
            height={500}
          />
          <Image
            src="/images/people/image-3.jpg"
            alt="Nosso team de membros"
            width={820}
            height={500}
          />
          <Image
            src="/images/people/image-2.jpg"
            alt="Imagem 3 de nossos membros"
            width={375}
            height={500}
          />
          <Image
            src="/images/people/image-4.jpg"
            alt="Nosso team de membros"
            width={820}
            height={500}
          />
          </Slider>
      </div>
    );
  }
}

export function OurTeam() {
  return (
    <Section
      className={[
        styles.ourTeam
      ]}
      id="our-team"
    >
      <Header.Tertiary>Nossos Membros</Header.Tertiary>
      <div className={styles.galery}></div>
      <Gallery />
    </Section>
  )
}