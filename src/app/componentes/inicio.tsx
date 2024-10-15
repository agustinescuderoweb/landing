
import React from 'react'
import Animation from '../assets/animacion'
import styles from '@/app/componentes/inicio.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import What from '../../../public/whatsaaps.svg'

function inicio() {
  return (
    <div  className={styles.contenedor}>
        <div className={styles.logos}><Image  className={styles.logo} src={Logo}></Image><h1>|| www.agustinescuderoweb.com ||</h1></div>
        <div className={styles.contenido}>
        <h1>MAXIMIZA TUS OPORTUNIDADES DE VENTA Y EXPANDE TU ALCANCE</h1>
        <h2>Impulsa tu negocio con una presencia online efectiva</h2>
        <a href='https://wa.link/elp2e3'><button><span><Image className={styles.what} src={What}></Image></span>Empieza Ahora</button></a>
        </div>
        <div className={styles.animacion}>
            <Animation />
        </div>
    </div>
  )
}

export default inicio