// src/componentes/LottieAnimation.tsx
'use client'
import { FC } from 'react';
import Lottie from 'react-lottie-player';

// Importamos el archivo JSON desde la carpeta public
import animationData from '../../../public/animacion.json';

const Animation: FC = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 600, height: 600 }}
    />
  );
};

export default Animation;
