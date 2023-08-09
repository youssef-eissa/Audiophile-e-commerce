import React from 'react'
import personeimg from './assets/shared/desktop/image-best-gear.jpg'


function Bring({page}) {
return (
    <div style={page==="checkout"?{display:"none"}:{display:"block"}} className='container'>
           <div className='row'>
            <div className='col-12 d-flex p-3 flex-md-row flex-column-reverse mt-md-5 justify-content-between p-0 '>
                <div className='textt col-md-5 col-12 text-center d-flex flex-column justify-content-center'>
                    <h1 className='my-md-0 my-3 mb-3' style={{fontSize:"40px"}}>
                        BRINGING YOU THE <span style={{color:"#D87D4A"}}>BEST</span> AUDIO GEAR
                    </h1>
                    <p style={{fontSize:"15px", color:"#979797"}}>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <div className='col-md-5 col-12 mb-md-5 '>
                    <img alt='imgg' className='img-fluid w-100 h-100 rounded' src={ personeimg} />
                </div>
            </div>
        </div>
    </div>
)
}

export default Bring