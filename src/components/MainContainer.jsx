import React from 'react'
import './MainContainer.css'

function MainContainer() {
  return (
    <div className='main-container'>
        <div className="left">
            <div className="banner">
                <div className="text-container">
                    <h1>Round Hall</h1>
                    <h2>1.5 ETH/h2</h2>
                    <p>Uploaded by Alexander Vernoff</p>
                    <div className="bid">
                        <a href='/' className="button-one">
                            Bid now
                        </a>
                        <p>Ending in<span>2d:15h:31m</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default MainContainer