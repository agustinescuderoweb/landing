import React from 'react'
import Image from 'next/image'
import styles from '@/app/componentes/redes.module.css'
import Instagram from '../../../public/instagram.svg'
import Whatsaap from '../../../public/whatsaap.svg'
import Youtube from '../../../public/youtube.svg'

function redes() {
  return (
    <div className={styles.contenedor}>
         <a href='https://www.instagram.com/agustinescuderoweb/'><Image src={Instagram} alt='instagra'></Image></a>
         <a href='https://wa.link/elp2e3'><Image src={Whatsaap} alt='whatsapp'></Image></a>
         <a href='https://www.youtube.com/@agustinescuderoweb'><Image src={Youtube} alt='youtube'></Image></a>
    </div>
  )
}
export default redes