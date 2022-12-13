import React, {Suspense, useRef,useState} from 'react'
import * as THREE from 'three'
import { VRButton, Interactive, ARButton, XR, useXREvent, Controllers, Hands,  useHitTest, } from '@react-three/xr'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import vector from "../../assets/Vector.svg"
import love from "../../assets/heart.svg"
import cart from "../../assets/shopping-cart.svg"
import "./shop.scss"


function Model({ ...props }) {
  const group = useRef()

  
  useHitTest((hitMatrix) => {
    hitMatrix.decompose(group.current.position, group.current.quaternion, group.current.scale)
  })


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


const Shoe =() => {
  return <Model  position={[0, 0, 0]} />
}

const Shop = () => {
    const[inArMode, setInArMode] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleUpdatePosition = (event) => {
    setPosition({
      x: position.x + event.deltaX,
      y: position.y + event.deltaY,
      z: position.z + event.deltaZ,
    });
  };

    
  return (
    <>
     <div className='shop'>
     {!inArMode  && <header className='shop__header'>
            <img src={vector} alt="" />

            <p>Casablanca Furniture</p>

            <img src={love} alt="love" />
        </header> }

        <div className='shop__product'>
        <Canvas>
            <XR onUpdate={handleUpdatePosition}>
                      <Suspense fallback={null}>
                      <Controllers />
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                           <Interactive>
                             <Shoe />
                           </Interactive>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/> 
                      </Suspense>
                      </XR>
                   </Canvas> 
        </div>

       {!inArMode &&  <div className='shop__info'>
            <div className='shop__info-header'>
                <div>
                    <p>Casablanca Furniture <br />
                    <span>Sofa</span> <br />
                    <span>$299</span></p>
                </div>
            </div>
 
            <div className='shop__info-description'>
                <p>The sleek and stylish Casablanca sofa is the perfect addition to
                     any modern living room. Made with high-quality materials that offers
                      both style and comfort. Available in a range of colors, 
                    the Casablanca sofa is sure to elevate your living space.</p>
            </div>
        </div>}

      {!inArMode && <div className='shop__cartt'>
            <div className='shop__cartt-img'>
                <img src={cart} alt="" />
            </div>
           
            <p>Add to cart</p>
        </div>}


    </div>

<div className='ar-button'>
    <ARButton onClick={()=> setInArMode(!inArMode)}className='ar' />
</div>
</>
  )
}

export default Shop