import { Link } from 'react-router-dom'
import './Headphones.css'



function Headphones({ data ,setDetails,setPage,details}) {
    const Headphones = data.filter(e => e.category === "headphones").reverse()


return (
    <div className='container headp p-0'>
                {Headphones.map(head => {
                    return <div key={head.name} className='row mt-5'>
                            <div  className={` justify-content-between p-md-0 p-4 col-12 flex-column p-0 d-flex ${head.id%2===1?"flex-md-row-reverse":"flex-md-row"}`}>
                        <div  className='col-md-4 col-12'>
                            <img alt='imgg' src={ require(`${head.image.desktop}`)} className='img-fluid h-100' />
                        </div>
                        <div className='col-md-5 col-12 d-flex flex-column align-items-center align-items-md-start justify-content-center my-md-0 my-3'>
                            {head.new && <div style={{ letterSpacing: "10px", color: "#D87D4A" }}>NEW PRODUCT</div>}
                            <h1 style={{fontSize:"40px"}} className='col-md-6 col-8 text-center my-3'>{head.name}</h1>
                                <p className='col-12 text-center' style={{ color: "#979797" }}>{head.description}</p>
                                <Link onClick={() => { setDetails([{ ...head, itemquantity: 1 }]); setPage(""); window.scrollTo({ top: "0" })}} to='/Audiophile-e-commerce/details' style={{textDecoration:"none"}} className='linkhead col-4 text-center py-3'>SEE PRODUCT</Link>
                        </div>
            </div>
                    </div>
        })}
    </div>
)
}

export default Headphones