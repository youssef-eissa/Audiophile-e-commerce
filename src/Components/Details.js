import { Link } from 'react-router-dom'
import './Details.css'
import { useState } from 'react'

function Details({ details, setDetails, data,   cart }) {
  const [itemqCartuantity, setItemCartQuantity] = useState(Number)

  return (
    <div className='container position-relative mt-md-5 p-0' style={{ marginBottom: "200px" }}>

      {details.map(product => {
        return <div key={product.name} className='row'>
          <div className='col-12 p-md-0 p-4 d-flex flex-md-row flex-column justify-content-between'>
            <div className='col-md-4 col-12'>
              <img alt='imgg' src={require(`${product.image.desktop}`)} className='img-fluid rounded' />
            </div>
            <div className='col-md-5 col-12 my-md-0 my-4 d-flex flex-column justify-content-center'>
              {product.new && <span style={{ letterSpacing: "10px", color: "#D87D4A" }}>NEW PRODUCT</span>}
              <h1 className='col-md-5 my-md-0 my-5 col-9 my-md-3'>{product.name}</h1>
              <span>{product.description}</span>
              <span className='price mt-md-5 my-md-0 my-5 fw-bold'>{`$ ${(product.price*product.itemquantity).toLocaleString("en-US")}`}</span>
              <div className='col-12 d-flex mt-md-4 column-gap-md-3 column-gap-5'>
                <div style={{ backgroundColor: "#F1F1F1" }} className='col-md-3 col-5 d-flex py-2 align-items-md-start justify-content-between text-center'>
                  <button disabled={product.itemquantity === 1} onClick={() => { setItemCartQuantity(product.itemquantity--)}} className='col-4 sign'>-</button>
                  <span className='col-4'>{ product.itemquantity}</span>
                  <button onClick={() => { setItemCartQuantity(product.itemquantity++); }} className='col-4 sign '>+</button>
                </div>
                <Link onClick={() => { cart.length>0&&cart.includes(product)?setItemCartQuantity(product.itemquantity++):cart.push(product)}} className='col-md-4 col-5 d-flex justify-content-center align-items-center addto' style={{ color: "white", textDecoration: "none", fontSize: "13px" }}>ADD TO CART</Link>
            </div>
            </div>
          </div>
        <div className='col-12 mt-md-5 d-flex flex-md-row p-4 flex-column justify-content-between p-md-0'>
          <div className='col-md-6 col-12'>
            <h1>Features</h1>
            <p style={{color:"#979797",lineHeight:"1.7"}}>{ product.features}</p>
            </div>
            <div className='col-md-4 col-12'>
              <h1>IN THE BOX</h1>
              <ul style={{backgroundColor:"transparent",position:"relative",padding:"0"}}>
                {product.includes.map(include => {
                  return <li className='d-flex' key={include.item}><span style={{color:"#D87D4A",fontSize:"15px"}} className='col-2 fw-bold'>{include.quantity }x</span> <span style={{color:"#979797",fontSize:"15px"}} className='col-10'>{include.item}</span></li>
              })}
              </ul>
            </div>
          </div>
          <div className='col-12 d-flex flex-md-row flex-column p-md-0 p-4 column-gap-3 mt-5'>
            <div className='col-md-6 col-12 d-flex mb-md-0 mb-3 flex-column row-gap-3'>
              <div className='col-12'>
                <img alt='imgg' src={require(`${product.gallery.first.desktop}`) } className='img-fluid w-100 rounded' />
              </div>
              <div className='col-12 '>
                <img alt='imgg' src={require(`${product.gallery.second.desktop}`) } className='img-fluid w-100 rounded' />
              </div>
            </div>
            <div className='col-md-6 col-12 '>
              <div className='col-12 h-100'>
                <img alt='imgg' src={require(`${product.gallery.third.desktop}`) } className='img-fluid rounded h-100' />
              </div>
            </div>
          </div>
          <div className='col-12 mt-5'>
            <h1 className='text-center'>YOU ALSO MAY LIKE</h1>
            <div className='col-12 d-flex flex-md-row p-4 p-md-0 flex-column column-gap-3 mt-5 '>
              {product.others.map(other => {
                return <div key={other.name} className='col-md-4 my-md-0 my-3 col-12 d-flex flex-column'>
                  <div className='col-12 '>
                <img alt='imgg' className='img-fluid h-100' src={require(`${other.image.desktop}`)} />
                  </div>
                  <div className='infoo text-center mt-5'>
                    <h1 className='col-12 mb-3'>{other.name}</h1>
                    <Link onClick={() => { setDetails([{ ...data.filter(e => e.slug === other.slug)[0], itemquantity: 1 }]); window.scrollTo({ top: "0" });  }} className=' mt-3 px-4 py-2 col-12 linkhov' style={{textDecoration:"none",color:"white" }}>SEE PRODUCT</Link>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Details