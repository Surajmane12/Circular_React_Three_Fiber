import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'
import './style.css'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Bloom, ToneMapping } from '@react-three/postprocessing'

import Scene from './components/Cylinder'
import { EffectComposer } from '@react-three/postprocessing'
import CylnAnimation from './components/CylnAnimation'

function App() {



  return (
    <>
      <CylnAnimation/>

      <div className="bg-black w-full py-32 text-center">
  <h3 className="text-yellow-300 text-4xl font-bold">Hey, I am Suraj Mane!</h3>
  <p className="text-white mt-4 text-lg">Bringing the 3D portfolio!!!</p>
</div>

      
    </>
  )
}

export default App
