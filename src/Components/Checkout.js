import React, { useEffect, useRef, useState } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import check from './assets/checkout/icon-order-confirmation.svg'
import cashicon from './assets/checkout/icon-cash-on-delivery.svg'

function Checkout({ cart, setPage, setCart }) {
    const theref=useRef(null)
    const [confirmationDisplay, setConfirmationDisplay] = useState("d-none")
    const [lessOrMore, setLessOrMore] = useState("less")
    const [cash,setCash]=useState("d-none")
 const prices = cart.map(price => {
        return price.price*price.itemquantity
    })
    const finalPrice = prices.reduce((acc, curr) => {
    return acc+curr
    }, 0)
    const vat = 1079
    const shiping = 50
    const grand = [finalPrice, vat, shiping]
    const grandTotal = grand.reduce((acc, curr) => {
        return acc+curr
    })
    useEffect(() => {
        window.onclick = (e) => {
        theref.current===e.target&&setConfirmationDisplay("d-none")
        }
    }, [setConfirmationDisplay])
 
    return (
    <div className='container position-relative p-0 '>
        <div  className='row'>
            <div className='col-md-12 d-flex flex-md-row flex-column justify-content-around p-md-0 p-4 row-gap-4 my-md-5 '>
                <form style={{backgroundColor:"white"}} className='p-5 rounded col-md-8 col-12 '>
            <h1 className='my-3'>CHECKOUT</h1>
                    <div className='col-12 d-flex flex-column flex-md-row flex-wrap justify-content-between'>
                        <span style={{ color: "#D87D4A" }} className='col-12 fw-bold mb-2'>BILLING DETAILS</span>
                        <div className='col-12 d-flex flex-md-row flex-column column-gap-1'>
                            <div className='col-md-6 col-12 mb-3 '>
                            <label className='col-12 fw-bold'>Name</label>
                            <input className='col-12 input rounded p-3 ' placeholder='Alexei Ward'/>
                        </div>
                        <div className='col-md-6 col-12 mb-md-0 mb-3'>
                            <label className='col-12 fw-bold'>Email Address</label>
                            <input className='col-12 input rounded p-3 ' placeholder='alexei@mail.com'/>
                        </div>
                    </div>
                        <div className='col-md-6 col-12'>
                            <label className='col-12 fw-bold'>Phone Number</label>
                            <input className='col-12 input rounded p-3 ' placeholder='+1 202-555-0136'/>
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-md-row flex-column mt-5 flex-wrap  '>
                        <span style={{ color: "#D87D4A" }} className='col-12 fw-bold mb-2'>SHIPPING INFO</span>
                        <div className='col-12 mb-3'>
                            <label className='col-12 fw-bold'>Address</label>
                            <input className='col-12 input rounded p-3 ' placeholder='1137 Williams Avenue'/>
                        </div>
                        <div className='col-12 d-flex flex-md-row flex-column column-gap-1 mb-3'>
                            <div className='col-md-6 col-12 mb-md-0 mb-3'>
                            <label className='col-12 fw-bold'>ZIP Code</label>
                            <input className='col-12 input rounded p-3 ' placeholder='10001'/>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label className='col-12 fw-bold'>City</label>
                            <input className='col-12 input rounded p-3 ' placeholder='New York'/>
                        </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <label className='col-12 fw-bold'>Country</label>
                            <input className='col-12 input rounded p-3 ' placeholder='United States'/>
                        </div>
                    </div>
                    <div className='col-12 d-flex flex-md-row flex-column mt-5 flex-wrap  '>
                        <span style={{ color: "#D87D4A" }} className='col-12 d-flex flex-md-row flex-column fw-bold mb-2'>PAYMENT DETAILS</span>
                        <div className='col-md-6 mb-md-0 mb-3 col-12 fw-bold'>
                            Payment Method
                        </div>
                        <div className='col-md-6 col-12 d-flex flex-column'>
                                <input  onChange={()=>setCash("d-none")} className='d-none' id='e-money' name='payMethod' type='radio'/>
                            <label htmlFor='e-money' className='radio mb-3 fw-bold py-3 px-5 rounded'>
                                e-Money
                            </label>
                                <input onChange={()=>setCash("d-block")} className='d-none' name='payMethod' type='radio' id='cash'/>
                            <label htmlFor='cash' className='radio fw-bold p-3 rounded py-3 px-5 '>
                                Cash On Delivery
                        </label>
                        </div>
                        <div className='col-12 e-money d-flex flex-md-row flex-column mt-3 column-gap-1'>
                            <div className='col-md-6 col-12 mb-md-0 mb-3'>
                                <label className='fw-bold mb-3'>e-Money Number</label>
                                <input className='col-12 p-3 rounded' placeholder='238521993'/>
                            </div>
                            <div className='col-md-6 col-12'>
                                <label className='fw-bold mb-3'>e-Money PIN</label>
                                <input className='col-12 p-3 rounded' placeholder='6891'/>
                            </div>
                        </div>
                        </div>
                        {cash === "d-block" && <div className='col-12 mt-3 d-flex justify-content-between'>
                            <div className='col-2 d-flex align-items-center justify-content-center'>
                                <img alt='cash' src={ cashicon} className='img-fluid' />
                            </div>
                            <div style={{color:"#979797"}} className='col-10'>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </div>
                        </div>}
                </form>
                <div style={{backgroundColor:"white"}} className='col-md-3 col-12 p-md-4 p-5 d-flex flex-column align-self-start rounded '>
                    <h6 className='fw-bold'>SUMMARY</h6>
                    {cart.map(row => {
                        return <div key={row.name} className='p-2 row'>
                            <div className='col-12 d-flex justify-content-between align-items-center mt-3 p-0'>
                                <div className='col-3'>
                                    <img alt='img' className='img-fluid rounded' src={require(`${row.image.desktop}`)} />
                                </div>
                                <div className='col-5 d-flex flex-column'>
                                    <span>{row.name.split(" ")[0]}</span>
                                    <span style={{ color: "#979797" }} className='fw-bold'>{`$${(row.price * row.itemquantity).toLocaleString("en-US")}`}</span>
                                </div>
                                <span className='fw-bold col-2 text-end' style={{ color: "#979797" }}>{`x${row.itemquantity}`}</span>
                            </div>
                        </div>
                    })}
                    <div className='col-12 d-flex mt-3'>
                            <span style={{ color: "#979797" }} className='col-6 '>TOTAL</span>
                            <span className='col-6 fw-bold text-end'> {`$${finalPrice.toLocaleString("en-US")}`}</span>
                        </div>
                        <div className='col-12 d-flex mt-3'>
                            <span style={{ color: "#979797" }} className='col-6 '>SHIPPING</span>
                            <span className='col-6 fw-bold text-end'> {`$${shiping}`}</span>
                        </div>
                        <div className='col-12 d-flex mt-3'>
                            <span style={{ color: "#979797" }} className='col-6 '>VAT (INCLUDED)</span>
                            <span className='col-6 fw-bold text-end'> {`$${vat.toLocaleString("en-US")}` }</span>
                        </div>
                        <div className='col-12 d-flex mt-3'>
                            <span style={{ color: "#979797" }} className='col-6 '>GRAND TOTAL</span>
                            <span style={{color:"#D87D4A"}} className='col-6 fw-bold text-end'> {`$${grandTotal.toLocaleString("en-US")}` }</span>
                        </div>
                             <Link onClick={() => {window.scrollTo({top:"0"}) ; setConfirmationDisplay("d-block");}} style={{textDecoration:"none",color:"white"}} className='con justify-content-center d-flex col-12 py-3 mt-3'>
                            CONTINUE & PAY
                    </Link>
                </div>
            </div>
            </div>
            <div ref={theref} style={{ backgroundColor: "#000000a3" }} className={`confirmation z-2 ${confirmationDisplay}`}>
                <div className='row'>
                    <div  style={{backgroundColor:"white",top:"400px"}} className=' d-flex flex-column rounded col-md-3 col-5 position-absolute translate-middle start-5 p-5 conCart '>
                <div className='col-12'>
                    <img alt='confirmation' src={ check} className='img-fluid col-md-1 col-3' />
                </div>
                <h1 className='my-3 col-12 thankk' style={{ fontWeight: "bold", }}>THANK YOU FOR YOUR ORDER</h1>
                        <span className='col-12' style={{ fontSize: "15px", color: "#979797" }}>You will receive an email confirmation shortly.
                        </span>

                        <div className='col-12 d-flex flex-md-row flex-column my-3'>
                            {lessOrMore==="less"? <div style={{backgroundColor:"#F1F1F1"}} className=' rounded d-flex flex-column col-md-6 col-12 mb-md-0 mb-3 p-3'>
                                <div className='col-12 d-flex align-items-start less'>
                                    <div className='col-4 '>
                                    <img alt='img' className='img-fluid' src={ require(`${cart[0].image.desktop}`)} />
                                </div>
                                <div className='col-6'>
                                    <h4>{cart[0].name.split(" ")[0]}</h4>
                                    <span style={{color:"#979797",fontWeight:"bold"}}>{`$${cart[0].price.toLocaleString("en-US")}` }</span>
                                </div>
                                    <span style={{ color: "#979797" }} className='col-2 fw-bold'>{ `x${cart[0].itemquantity}`}</span>
                                </div>
                                {cart.length > 1 && <span onClick={()=>setLessOrMore("more")} style={{color:"#979797",cursor:"pointer",fontWeight:"bold"}} className='col-12 text-center'>{`and ${cart.length-1} other items`}</span>
                                }
                            </div> : <div style={{backgroundColor:"#F1F1F1"}} className='rounded d-flex flex-column col-6 p-3'>
                                    <div className='more'>
                                    {cart.map(row => {
                        return <div key={row.name} className='p-2 row '>
                            <div className='col-12 d-flex justify-content-between align-items-center mt-3 p-0'>
                                <div className='col-3'>
                                    <img alt='img' className='img-fluid rounded' src={require(`${row.image.desktop}`)} />
                                </div>
                                <div className='col-5 d-flex flex-column'>
                                    <span>{row.name.split(" ")[0]}</span>
                                    <span style={{ color: "#979797" }} className='fw-bold'>{`$${(row.price * row.itemquantity).toLocaleString("en-US")}`}</span>
                                </div>
                                <span className='fw-bold col-2 text-end' style={{ color: "#979797" }}>{`x${row.itemquantity}`}</span>
                            </div>
                        </div>
                                    })}
                                </div>
                                    <span onClick={()=>setLessOrMore("less")} className='col-12 text-center' style={{cursor:"pointer",color:"#979797"}}>VIEW LESS</span>
                            </div>}
                            <div style={{backgroundColor:"black"}} className={`col-md-6 col-12 p-5 rounded ${lessOrMore==="more"?"d-flex flex-column justify-content-end":"text-center"}`}>
                                <div style={{color:"#979797"}}>GRAND TOTAL</div>
                                <div style={{color:"white"}}>{`$${grandTotal.toLocaleString("en-US")}` }</div>
                        </div>
                        </div>
                        <Link to='/' onClick={() => { setCart([]); setConfirmationDisplay("d-none"); setPage("home")}} className='col-12 backk py-3 my-2'>BACK TO HOME</Link>
                    </div>
            </div>
            </div>

    </div>
)
}

export default Checkout


