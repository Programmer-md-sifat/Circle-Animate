import React from 'react'
import { Canvas } from "@react-three/fiber"
import './style.css'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import { Bloom, EffectComposer } from "@react-three/postprocessing"


const App = () => {

  return (

    <>
    <Canvas flat camera={{fov: 35}}>
      <OrbitControls />
      <ambientLight />
      <Scene />

      <EffectComposer>
        
        <Bloom
        
          mipmapBlur
          intensity={15.0}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.5}

        />

      </EffectComposer>

    </Canvas>
    </>
  )
}

export default App