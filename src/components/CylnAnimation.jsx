import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'
// import './cylinder.css'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Bloom, ToneMapping } from '@react-three/postprocessing'

import Scene from './Cylinder'
import { EffectComposer } from '@react-three/postprocessing'

function CylnAnimation() {



  return (
    <>
      <Canvas flat camera={{ fov: 25 }}>

        {/* To get the three effect we require the OrbitControls */}
        <OrbitControls />
        <Scene/>
        <ambientLight />
        <EffectComposer>

          <Bloom
            mipmapBlur
            intensity={7} // The bloom intensity.
            luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />

          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    

      
    </>
  )
}

export default CylnAnimation
