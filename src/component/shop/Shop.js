import React, {Suspense, useRef, useState, useEffect} from 'react'
import vector from "../../assets/Vector.svg"
import love from "../../assets/heart.svg"
import cart from "../../assets/shopping-cart.svg"
import chair from "../../assets/new.glb"
import usdz from "../../assets/new.usdz"
import ar from "../../assets/augmented-reality.png"
import "./shop.scss"


const Shop = () => {
  const [error, setError] = useState(null);
  const [arStatus, setARStatus] = useState(null);
  const arButtonRef = useRef()


  const handleARError = (event) => {
    setError(event.detail);
  }
   const arHandler = () =>{
    arButtonRef.current.click()
    console.log('clicked')
  }


  useEffect(() => {
    const modelViewer = document.querySelector('model-viewer');
    setARStatus(modelViewer.getAttribute('ar-status'));
  }, []);

  console.log(error)

 


    
  return (
    <>
     <div className='shop'>
    <header className='shop__header'>
            <img src={vector} alt="" />

            <p>Casablanca Furniture</p>

            <img src={love} alt="love" />
        </header> 

        <div className='shop__product'>
          <model-viewer  src={chair} ios-src={usdz} ar ar-modes="webxr scene-viewer quick-look" xr-environment camera-controls poster="poster.webp" shadow-intensity="1" >
            <button onError={handleARError} ref={arButtonRef} slot="ar-button" id="ar-button">
                <img src={ar} alt="ar button" />
            </button>

          {arStatus === 'unsupported' && <p>AR is not supported on this device.</p>}
        </model-viewer>
        </div>

        

       <div className='shop__info'>
            <div className='shop__info-header'>
                <div>
                {error && <p>An error occurred while loading AR: {error.message}</p>}
                    <p>Casablanca Furniture <br />
                    <span>Sofa</span> <br />
                    <span>$299</span></p>
                </div>

            <button onClick={arHandler} slot="ar-button" id="ar-button">
                <img src={ar} alt="ar button" />
            </button>
{/* 
            {arSupported ? (<button onClick={arHandler} slot="ar-button" id="ar-button">
                <img src={ar} alt="ar button" />
            </button>) : 
            (<button className='not'>
              ar not supported
            </button>)} */}


{arStatus === 'unavailable' && <p>AR is not currently available.</p>}
      {arStatus === 'ready' && <p>AR is ready to use.</p>}
      {arStatus === 'active' && <p>AR is currently active.</p>}
                
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

export default Shop