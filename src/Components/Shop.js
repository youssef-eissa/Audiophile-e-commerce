import React from 'react'
import { Link } from 'react-router-dom'
import headphones from './assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from './assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from './assets/shared/desktop/image-category-thumbnail-earphones.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Shop.css"

function Shop({ page,setPage }) {
    return (
    <div style={page==="checkout"?{display:"none"}:{display:"block"}} className=' container'>
        {page!=="home" && <div className='row'>
            <div className='col-12 p-md-0 p-5 shop d-flex flex-md-row flex-column justify-content-md-between '>
                    <Link onClick={() => { setPage("headphone"); ;window.scrollTo({top:"0"})}} to='/Audiophile-e-commerce/headphones' style={{textDecoration:"none"}} className='col-md-3 col-12 secc d-md-flex rounded position-relative flex-column align-items-center'>
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

        </div>}
    </div>
)
}

export default Shop