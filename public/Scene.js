/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Melon Polygons (https://sketchfab.com/Melonpolygons)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/stool-9f5c2d3ee512480dbd852dbf08bfe7c6
title: Stool
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-1.57, 508.38, -10.21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Stool_LP_Stool_0.geometry} material={materials.Stool} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
