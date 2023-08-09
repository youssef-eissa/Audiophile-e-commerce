import './NavBar.css'
import logo from './assets/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'
import cartIcon from './assets/shared/desktop/icon-cart.svg'
import homeimg from './assets/shared/desktop/home`.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function NavBar({ data, page, setPage,setDetails ,setDisplay,display,details,cart}) {
    const xx99 = data.filter(x => x.name === "XX99 Mark II Headphones")
    const [menuDisplay,setMenuDisplay]=useState("d-none")

return (
    <div className='container-fluid z-3 overflow- position-relative nav pb-'>
        <div className='container '>
            <div className='row'>
                <div className='col-12 d-flex  py-3 justify-content-between navcon'>
                    <div className='d-md-none d-block col-2' onClick={()=>setMenuDisplay(menuDisplay==="d-none"?"d-flex":"d-none")}>
                        <MenuIcon  style={{color:"white"}}/>
                    </div>
                <div className='logo col-md-2 '>
                    <img alt='logo' src={ logo} className='img-fluid' />
                </div>
                    <ul className={`col-md-7 p-0 ${menuDisplay} flex-column p-5 p-md-0 mx-md-0  align-items-center  z-3  d-md-block`}  >
                        <span className='d-md-none' style={{color: "white", position: "absolute",left:"10px",top:"0"}} onClick={()=>setMenuDisplay("d-none")}>
                        <CloseIcon  />

                        </span>
                        <Link onClick={() => { setPage("home"); setMenuDisplay("d-none")}} to='/' className='link me-md-4 my-md-0 my-3'>HOME</Link>
                        <Link onClick={() => { setPage("headphone");setMenuDisplay("d-none") }} to='/headphones' className='link my-md-0 my-3 me-md-4'>HEADPHONES</Link>
                        <Link onClick={() => { setPage("speakers"); setMenuDisplay("d-none")}} to='/speakers' className='link my-md-0 my-3 me-md-4'>SPEAKERS</Link>
                    <Link onClick={()=>{setPage("earphone"); setMenuDisplay("d-none")}} to="/earphones" className='link my-md-0 my-3 me-md-4'>EARPHONES</Link>
                </ul>
                    <Link onClick={() => { setDisplay(display === "d-block" ? "d-none" : "d-block") }} className='col-1 text-end position-relative'>
                        <img alt='cart' src={cartIcon} />
                        <span style={{ backgroundColor: "red", borderRadius: "50%", width: "10px", height: "10px", top: "0", right: "-10px" }} className={`position-absolute ${cart.length===0?"d-none":"d-block"}` }></span>
                </Link>
        </div>
            </div>
            <div  className='row'>
                {page === "home" ? xx99.map(xx => {
                        return <div key={xx.name} className='col-12 d-flex mt-md-5 justify-content-between pb-5'>
                        <div className=' left-text d-flex flex-column justify-content-center col-md-5 col-12 align-items-center align-items-md-start '>
                        {xx.new&&<span style={{color:"#979797",letterSpacing:"10px"}} className='mt-5'> New Product</span>}
                        <h1 className='col-12 text-md-start text-center my-4' style={{ color: "white",  }}>{xx.name}</h1>
                        <p className='col-12 text-center text-md-start' style={{ color: "#979797", fontSize: "15px" }}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                                <Link to='/details' onClick={() => { setDetails([{ ...xx, itemquantity: 1 }]); setPage("") }} style={{textDecoration:"none"}} className='btnn mt-md-3 py-3 text-center col-4'>SEE PRODUCT</Link>
                    </div>
                    <div className='col-md-6 col-12 ' >
                        <img  alt='imgg'  className='img-fluid' src={ homeimg} />
                    </div>
                    </div>
                    })
                        : page==="headphone" ?<div className='col-12 fw-bold text-center p-md-5' style={{color:"white",fontSize:"40px"}}> HEADPHONES</div>:page==="speakers"? <div className='col-12 fw-bold text-center p-md-5' style={{color:"white",fontSize:"40px"}}> SPEAKERS</div>:page==="earphone"?<div className='col-12 fw-bold text-center p-md-5' style={{color:"white",fontSize:"40px"}}> EARPHONES</div>:""}
            </div>
        </div>

    </div>
)
}

export default NavBar