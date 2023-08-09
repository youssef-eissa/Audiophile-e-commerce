import React from 'react'
import logo from './assets/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer({setPage}) {
return (
    <div className='container-fluid  pb-md-5 ' style={{backgroundColor:"#101010"}}>
        <div className='container '>
            <div className='row'>
                <div className='col-12 d-flex justify-content-between flex-md-row  flex-column mt-md-5'>
                    <div className='logo col-md-4 mt-md-0 mt-5 text-center col-12 position-relative'>
                        <span className='position-absolute translate-middle' style={{width:"101px",height:"4px",backgroundColor:"#D87D4A" ,top:"-46px",left:"50%"}}></span>
                        <img alt='logo' src={ logo} className='img-fluid' />
                    </div>
                    <ul className='d-md-block d-flex p-0 flex-column col-md-7 mt-md-0 mt-4 align-items-center position-relative col-12 text-end'  >
                        <Link onClick={() => { setPage("home");window.scrollTo({top:"0"})}} to='/' className='link me-md-4 my-md-0 my-3'>HOME</Link>
                        <Link onClick={() => { setPage("headphone");window.scrollTo({top:"0"})}} to='/headphones' className='link me-md-4 my-md-0 my-3'>HEADPHONES</Link>
                        <Link onClick={() => { setPage("speakers");window.scrollTo({top:"0"})}} to='/speakers' className='link me-md-4 my-md-0 my-3'>SPEAKERS</Link>
                    <Link onClick={()=>{setPage("earphone");window.scrollTo({top:"0"})}} to="/earphones" className='link me-md-4 my-md-0 my-3'>EARPHONES</Link>
                </ul>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-12 d-flex text-center flex-md-row flex-column justify-content-between'>
                    <p style={{ color: "#979797" }} className='col-md-6 col-12 text-center mb-md-5'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className='col-md-6 col-12 d-flex align-items-end justify-content-md-end justify-content-center mb-md-0 mb-3'>
                    <Link className='iconn me-3' style={{color:"white"}}><FacebookIcon sx={{"&:hover":{color:"#D87D4A"},transition:"0.3s"}} /></Link>
                    <Link className='iconn me-3' style={{color:"white"}}><TwitterIcon sx={{"&:hover":{color:"#D87D4A"},transition:"0.3s"}}/></Link>
                    <Link className='iconn' style={{color:"white"}}><InstagramIcon   sx={{ "&:hover": { color: "#D87D4A" },transition:"0.3s" }} /></Link>
                    </div>
            </div>
            </div>
            <div className='row'>
            <span className='col-12  p-0 text-center'  style={{color:"#979797"}}>Copyright 2021. All Rights Reserved</span>

            </div>
        </div>
    </div>
)
}

export default Footer