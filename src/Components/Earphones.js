import React from 'react'
import { Link } from 'react-router-dom'
import './Earphones.css'

function Earphones({ data,setDetails,setPage,cart,details }) {
    const earphones = data.filter(earphone => earphone.category === "earphones")
return (
    <div className=' ear container'>
        {earphones.map(earphone => {
            return <div key={earphone.name} className='row mt-5'>
                <div className={`col-12 d-flex flex-column ${earphone.id % 2 === 0 ? "flex-md-row" : "flex-md-row-reverse"} justify-content-between`}>
                    <div className='col-md-4 col-12'>
                        <img alt='earphone' src={require(`${earphone.image.desktop}`)} className='img-fluid' />
                    </div>
                    <div className='col-md-5 col-12 d-flex flex-column align-items-md-start align-items-center justify-content-center'>
                {earphone.new&&<span style={{letterSpacing:"10px", color:"#D87D4A"}}>NEW PRODUCT</span>}
                        <h1 className='my-3 col-12 text-center text-md-start' style={{fontSize:"40px"}}>{earphone.name}</h1>
                        <span className='col-12 text-md-start text-center' style={{ color: "#979797", fontSize: "15px" }}> {earphone.description}</span>
                        <Link to='/Audiophile-e-commerce/details' onClick={() => {  setDetails([{ ...earphone, itemquantity: 1 }]); setPage("");window.scrollTo({top:"0"})}} style={{textDecoration:"none"}} className='earphonelink py-3 col-5 text-center mt-3'>SEE PRODUCT</Link>
                    </div>
                </div>
            </div>
        })}
    </div>
)
}

export default Earphones