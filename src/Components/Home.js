import React from 'react'
import './Home.css'
import headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png'
import ciicle from './assets/home/desktop/pattern-circles.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import zx9img from './assets/home/desktop/image-speaker-zx9.png'
import zx7img from './assets/home/desktop/image-speaker-zx7.jpg'
import yx1img from './assets/home/desktop/image-earphones-yx1.jpg'

import { Link } from 'react-router-dom'
function Home({ data, setDetails, setPage,details }) {
    const zx9 = data.filter(e => e.name === "ZX9 Speaker")
    const zx7 = data.filter(e => e.name === "ZX7 Speaker")
    const yx1 = data.filter(e => e.name === "YX1 Wireless Earphones")
    return (
    <div className='container homecon mb-md-5'>
        <div className='row'>
            <div className='col-12 p-md-0 p-5 d-flex flex-md-row flex-column justify-content-between '>
                    <Link  onClick={() => { setPage("headphone"); ;window.scrollTo({top:"0"})}} to='/Audiophile-e-commerce/headphones' style={{textDecoration:"none"}} className='col-md-3 col-12 secc d-md-flex rounded position-relative flex-column align-items-center'>
                <div className='col-md-8 col-6 img-box  '>
                    <img alt='head' className='img-fluid' src={headphones } />
                </div>
                <div className='text-box col-12 text-center position-absolute bottom-0 pb-3'>
                    <div className='fw-bold' style={{fontSize:"18px", color:"black"}}>HEADPHONES</div>
                <div>SHOP <span style={{color:"#D87D4A"}}><KeyboardArrowRightIcon/></span> </div>
                </div>
            </Link>
                    <Link onClick={() => { setPage("speakers"); ;window.scrollTo({top:"0"})}} to='/Audiophile-e-commerce/speakers' style={{textDecoration:"none"}} className='col-md-3 col-12 secc d-md-flex rounded position-relative flex-column align-items-center'>
                <div className='col-md-8 col-6 img-box  '>
                    <img alt='head' className='img-fluid' src={speakers } />
                </div>
                <div className='text-box col-12 text-center position-absolute bottom-0 pb-3'>
            <div className='fw-bold' style={{fontSize:"18px", color:"black"}}>SPEAKERS</div>
                <div>SHOP <span style={{color:"#D87D4A"}}><KeyboardArrowRightIcon/></span> </div>
                </div>
                </Link>
                    <Link onClick={() => { setPage("earphone"); ;window.scrollTo({top:"0"})}} to='/Audiophile-e-commerce/earphones' style={{textDecoration:"none"}} className='col-md-3 col-12   secc d-md-flex rounded position-relative flex-column align-items-center'>
                <div className='col-md-8 col-6 img-box  '>
                    <img alt='head' className='img-fluid' src={earphones } />
                </div>
                <div className='text-box col-12 text-center position-absolute bottom-0 pb-3'>
                <div className='fw-bold' style={{fontSize:"18px", color:"black"}}>EARPHONES</div>
                <div>SHOP <span style={{color:"#D87D4A"}}><KeyboardArrowRightIcon/></span> </div>
                </div>
            </Link>
            </div>

        </div>
        <div className='row p-3 p-md-0'>
            <div style={{ backgroundColor: "#D87D4A" }} className='m-md-0  rounded overflow-hidden mt-md-5 position-relative col-12 d-flex justify-content-center flex-md-row flex-column column-gap-5 align-items-center pt-5' >
                <div className='circle-img position-absolute '>
                <img alt='circle' src={ ciicle} className='img-fluid' />
                </div>
                <div className='col-4 z-3 imgz '>
                    <img alt='zx9img' className='img-fluid' src={ zx9img} />
                </div>
                <div className='col-md-5 text-sp d-flex align-items-center align-items-md-start flex-column z-2'>
                    <h1 className='col-md-7 my-md-0 my-3 col-6 h1h text-md-start text-center' >{data[0].others[2].name}</h1>
                    <p className='text-md-start col-md-12 col-10 text-center'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Link to='/Audiophile-e-commerce/details' onClick={() => { setDetails([{...zx9[0],itemquantity:1}]); setPage(""); ;window.scrollTo({top:"0"})}} className='col-md-4 mb-md-0 mb-3 col-5 text-center py-3 link ' style={{border:"none",fontSize:"13px",textDecoration:"none"}}>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
        <div className='row p-3 p-md-0'>
            <div className='rounded d-flex col-12 p-0 mt-md-5 position-relative zx7con'>
                <div className='textz7 h-100 rounded d-flex flex-column align-items-center justify-content-center col-6 '>
                    <h1 className='mb-3'>{data[5].others[0].name}</h1>
                        <Link to="/Audiophile-e-commerce/details" onClick={() => { setDetails([{...zx7[0],itemquantity:1}]); setPage(""); ;window.scrollTo({top:"0"})}} className='link col-9 col-md-4 text-center  py-2 px-3  '> SEE PRODUCT</Link>
                    </div>
                      <div className='rounded col-12 overflow-hidden overflow-hidden zx7imgcon'>
                    <img alt='zx7img' src={ zx7img} className='zx7img rounded ' />
                </div>
        </div>
        </div>
        <div className='row p-3  p-md-0'>
            <div className='col-12 d-flex flex-md-row flex-column row-gap-2 p-0 mb-md-5 mt-5 column-gap-1'>
                <div className='col-md-6 col-12'>
                    <img className='img-fluid w-100 rounded' alt='imgg' src={ yx1img} />
                </div>
                <div className='col-md-6 col-12 yx1 p-5 d-flex flex-column justify-content-center rounded' style={{backgroundColor:"#F1F1F1"}}>
                    <h1 className='mb-5'>{data[0].slug.toUpperCase()}</h1>
                        <Link to='/Audiophile-e-commerce/details' onClick={() => { setDetails([{...yx1[0],itemquantity:1}]); setPage("");window.scrollTo({top:"0"})}} className='link py-2 px-3 col-8 col-md-5 text-center '> SEE PRODUCT</Link>
                </div>
        </div>
        </div>
       
    </div>
)
}

export default Home