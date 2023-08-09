import './speakers.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Speakers({ data,setDetails,setPage,cart }) {
    let speakers = data.filter(speaker => speaker.category === "speakers").reverse()
    return (
    <div className='container speaker'>
        {speakers.map(speaker => {
            return <div key={speaker.name} className='row  my-5'>
                <div className={`col-12 d-flex flex-column ${speaker.id%2===0?"flex-md-row-reverse":"flex-md-row"} justify-content-between`}>
                    <div className='col-md-4 col-12'>
                        <img alt='imgg' className='img-fluid' src={require(`${speaker.image.desktop}`) } />
                    </div>
                    <div className='col-md-5 col-12 my-md-0 my-3 d-flex flex-column align-items-md-start align-items-center justify-content-center'>
                        {speaker.new && <span style={{ letterSpacing: "10px", color: "#D87D4A" }}>NEW PRODUCT</span>}
                        <h1 style={{fontSize:"40px"}} className='my-3'>{speaker.name}</h1>
                        <span className='col-12 text-center text-md-start' style={{fontSize:"15px",color:"#979797"}}>{speaker.description}</span>
                        <Link onClick={() => { !cart.includes(cart)&&setDetails([{...speaker,itemquantity:1}]); setPage("");window.scrollTo({top:"0"})}} to='/details' className='speakerlink col-5 text-center py-3 mt-3'>SEE PRODUCT</Link>
                    </div>
                </div>
            </div>
        })}
    </div>
)
}

export default Speakers