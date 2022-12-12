import React , {useEffect, useState} from 'react'
import myvid from "../assets/Evee.mp4";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import '../Css/OrderModal.css'
import OrderModal from './OrderModal';

export default function Home(props) {
  const [data, setdata] = useState({})
  const [modal, setModal] = useState(false)
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const fetchData = () => {
    fetch('http://localhost:5000/gethomeproduct')
          .then((response) => response.json())
          .then((data) => setdata(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  
  const openOrderModal = ()=>{
    if(props.userid){
      setModal(true);
    }else{
      alert("Please sign in to continue")
    }
  }

  const closeOrderModal = ()=>{
    setModal(false);
  }
  
  const bold = {
    fontWeight:"800",
    fontSize:"30px",
    display:"inline",
    color: "black"
  }
  const grey = {
    color: "grey",
    borderRight: "2px solid #e0e0e0",
  }
  return (
    <div>
      <video autoPlay loop muted style={{width:"100%"}}>
        <source src={myvid} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      {modal && <OrderModal price={data.price} productid={data._id} userid={props.userid} productname={data.name} closeOrderModal={closeOrderModal}/>}
      <div className="container">
        <div className='row mt-4' style={{textAlign:"center"}}>
          <div className='col-md-3 my-3' style={{textAlign:"center", fontWeight:"900", fontSize:"40px"}}>{data.name}</div>
          <div className='col-md-2 col-sm-4' style={grey}>Range<br/><span style={bold}>{data.range}</span><span>KM *</span></div>
          <div className='col-md-2 col-sm-4' style={grey}>Top speed<br/><span style={bold}>{data.topSpeed}</span><span>KM/H</span></div>
          <div className='col-md-2 col-sm-4' style={{color:"grey"}}>{data.speedrange}<br/><span style={bold}>{data.timerange}</span><span>sec</span></div>
          <div className='col-md-3 my-3' style={{textAlign:"right"}}><button onClick={openOrderModal} className='btn btn-dark p-3'>Buy at Rs {data.price}/-</button></div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='row'>
          <img src={car1} className="col-lg-6"/>
          <div className='col-lg-6' style={{padding:"45px"}}>{data.aboutcar}</div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='row'>
          <div className='col-lg-6' style={{padding:"45px"}}>{data.aboutcar2}</div>
          <img src={car2} className="col-lg-6"/>
        </div>
      </div>
      <div className='container my-4 py-4' style={{backgroundColor:"#e8e8e8", borderRadius:"20px"}}>
        <div className='h2 text-center'>The Finer Specification of the Product</div>
        <div className='row text-center'>
          <div className='col-md-3 col-6 py-4'>Range<br/><span style={bold}>{data.range}</span><span>KM</span></div>
          <div className='col-md-3 col-6 py-4'>Top Speed<br/><span style={bold}>{data.topSpeed}</span><span>KM/Hr</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange}<br/><span style={bold}>{data.timerange}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange2}<br/><span style={bold}>{data.timerange2}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>Modes<br/><span style={bold}>{data.modes}</span></div>
          <div className='col-md-3 col-6 py-4'>Charging Time<br/><span style={bold}>{data.chargetime}</span><span>Hrs</span></div>
          <div className='col-md-3 col-6 py-4'>Motor Power<br/><span style={bold}>{data.power}</span><span>kW</span></div>
          <div className='col-md-3 col-6 py-4'>Weight<br/><span style={bold}>{data.weight}</span><span>Kg</span></div>
        </div>
      </div>
    </div>
  )
}
