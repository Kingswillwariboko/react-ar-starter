import React from "react"
import chair from "./asset/chair.jpeg"
import cardboard from "./asset/icons8-virtual-reality-40.png"


import "./App.scss"

const App = () => {
  return(
    <main className="shop">

      <div className="shop__header">
        <h3>Kobiri</h3>
      </div>

      <div className="shop__product">
        <img src={chair} alt=""/>

        <div className="shop__product-info">
          <p>Chair top 1</p>

          <p>$200</p>
        </div>
      </div>

      <div className="shop__ar">
        <img src={cardboard} alt="" /> <br />
        <span>View AR</span> 
      </div>

      <div className="shop__info">
        <p>he first option the tool allows you to adjust is the number of random words to be generated. 
           can choose as many or as few as you'd like. You also have the option of choosing words that only
            begin with a certain letter, only end with a certain letter or only begin and end with certain 
            letters. 
          If you leave these blank, the randomized words that appear will be from the complete list.</p>
      </div>
    </main>
  )
}

export default App;
