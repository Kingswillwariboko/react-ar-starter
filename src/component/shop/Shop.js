import React from 'react'
import vector from "../../assets/Vector.svg"
import love from "../../assets/heart.svg"
import chair from "../../assets/pngwing 1.svg"
import arbutton from "../../assets/icon-park-outline_virtual-reality-glasses.svg"


import "./shop.scss"

const Shop = () => {
  return (
    <div className='shop'>
        <header className='shop__header'>
            <img src={vector} alt="" />

            <p>Casablanca Furniture</p>

            <img src={love} alt="love" />
        </header>

        <div className='shop__product'>
            <img src={chair} alt="" />
        </div>

        <div className='shop__info'>
            <div className='shop__info-header'>
                <div>
                    <p>Casablanca Furniture <br />
                    <span>Sofa</span> <br />
                    <span>$299</span></p>
                </div>

                <div>
                    <img src={arbutton} alt="" />
                </div>
            </div>
 
            <div className='shop__info-description'>
                <p>The sleek and stylish Casablanca sofa is the perfect addition to
                     any modern living room. Made with high-quality materials that offers
                      both style and comfort. Available in a range of colors, 
                    the Casablanca sofa is sure to elevate your living space.</p>
            </div>
        </div>

    </div>
  )
}

export default Shop