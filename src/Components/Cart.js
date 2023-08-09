import React, {  useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart({ cart, setCart, display,setDisplay,setPage }) {
    const conRef = useRef()
    const [itemqCartuantity, setItemCartQuantity] = useState(Number)
    const prices = cart.map(price => {
        return price.price*price.itemquantity
    })
    const finalPrice = prices.reduce((acc, curr) => {
    return acc+curr
    }, 0)
    useEffect(() => {
        window.onclick = (e) => {
            conRef.current === e.target && setDisplay("d-none")
        }
    },[setDisplay])
return (
    <div ref={conRef} style={{backgroundColor:"#000000a3"}} className={` z-1  position-absolute w-100 h-100 ${display}`}>
        <div  onClick={(e)=>e.stopPropagation()} style={{ backgroundColor: "white" }} className='boxContainer col-md-5 col-11 p-4 rounded '>
        <div className='row'>
            <div className='col-12 d-flex'>
            <div className='col-6 fw-bold'>CART ({cart.length})</div>
            <div onClick={() => { setCart([])}} className='col-6 remove text-end'>Remove all</div>
            </div>
                {cart.length === 0 ? <div className='row'>
                    <div style={{ color: "#979797"}} className='col-12 d-flex justify-content-center align-items-center py-5'>
                    NO DATA TO SHOW
                    </div>
        </div>:cart.map(row => {
            return  <div key={row.name} className='row'>
                <div className='col-12 d-flex justify-content-between align-items-center mt-3 p-0'>
                <div className='col-3'>
                    <img alt='img'  className='img-fluid rounded' src={require(`${row.image.desktop}`)} />
                </div>
                    <div className='col-5 d-flex flex-column'>
                        <span>{row.name.split(" ")[0]}</span>
                        <span style={{color:"#979797"}} className='fw-bold'>{`$${(row.price*row.itemquantity).toLocaleString("en-US")}`}</span>
                    </div>
                    <div style={{backgroundColor:"#F1F1F1"}} className='col-3 d-flex align-items-center  justify-content-center'>
                        <button onClick={() => { setItemCartQuantity(row.itemquantity--)}} className='col-4 sign'>-</button>
                        <span className='col-4 text-center'>{row.itemquantity }</span>
                        <button onClick={() => { setItemCartQuantity(row.itemquantity++) }} className='col-4 sign '>+</button>
                    </div>
                </div>
            </div>
            })}
            </div>
            <div className='row'>
                    <div className='col-12 d-flex justify-content-between my-3'>
                        <div style={{color:"#979797"}} className='col-6'>
                        TOTAL
                        </div>
                        <div  className='col-6 text-end fw-bold'>
                        {`$${finalPrice.toLocaleString("en-US")}`}
                        </div>
                </div>
            </div>
            <div className='row'>
                <Link to='/Audiophile-e-commerce/checkout' onClick={() => { setDisplay("d-none"); setPage("checkout")}} style={cart.length===0?{pointerEvents:"none"}:{pointerEvents:"auto"}} className='w-100 col-12 text-center checkout py-3'>CHECKOUT</Link>

            </div>
    </div>
        </div>
)
}

export default Cart