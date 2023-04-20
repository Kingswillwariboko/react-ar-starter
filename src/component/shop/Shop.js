import React, {useState, useRef, useEffect} from 'react'
import vector from "../../assets/Vector.svg"
import love from "../../assets/heart.svg"
import cart from "../../assets/shopping-cart.svg"
import chair from "../../assets/sofa.glb"
import ar from "../../assets/augmented-reality.png"
import "./shop.scss"


const Shop = () => {
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.src = fileUrl;
  }
  

  return (
    <>
     <div className='shop'>
    <header className='shop__header'>
            <img src={vector} alt="" />
            <p>Casablanca Furniture</p>
            <img src={love} alt="love" />
        </header> 
        <div className='shop__product'>
          <model-viewer  src={chair} interaction-prompt="none"  touch-action="pan-y" ar ar-modes="webxr scene-viewer quick-look" xr-environment camera-controls poster="poster.webp" shadow-intensity="1" >
           </model-viewer>
        </div>
        <input type="file" onChange={handleFileUpload} />


       <div className='shop__info'>
            <div className='shop__info-header'>
                <div>
                    <p>Casablanca Furniture <br />
                    <span>Sofa</span> <br />
                    <span>$499</span></p>
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
</>
  )
}

export default Shop;