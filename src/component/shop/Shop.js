import React, {Suspense, useRef,useState} from 'react'
import { VRButton, Interactive, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import vector from "../../assets/Vector.svg"
import love from "../../assets/heart.svg"
import arbutton from "../../assets/icon-park-outline_virtual-reality-glasses.svg"
import cart from "../../assets/shopping-cart.svg"
import "./shop.scss"



function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}/>
    </group>
  )
}

const Shop = () => {
  return (
    <div className='shop'>
        <header className='shop__header'>
            <img src={vector} alt="" />

            <p>Casablanca Furniture</p>

            <img src={love} alt="love" />
        </header>

        <div className='shop__product'>
        <Canvas>
            <XR>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Model />
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                      </XR>
                   </Canvas>
        </div>

        <div className='shop__info'>
            <div className='shop__info-header'>
                <div>
                    <p>Casablanca Furniture <br />
                    <span>Sofa</span> <br />
                    <span>$299</span></p>
                </div>

                <div className='ar-button'>
                    <ARButton className='ar' />
                </div>
            </div>
 
            <div className='shop__info-description'>
                <p>The sleek and stylish Casablanca sofa is the perfect addition to
                     any modern living room. Made with high-quality materials that offers
                      both style and comfort. Available in a range of colors, 
                    the Casablanca sofa is sure to elevate your living space.</p>
            </div>
        </div>

        <div className='shop__cartt'>
            <div className='shop__cartt-img'>
                <img src={cart} alt="" />
            </div>
           
            <p>Add to cart</p>
        </div>

    </div>
  )
}

export default Shop