import React,{useState, useEffect} from 'react'
import car1 from "../assets/car1.jpg";


export default function Orders(props) {

  const [data, setdata] = useState([]);

  const fetchData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userid:props.userid }),
    };
    fetch('http://localhost:5000/getorders',requestOptions)
          .then((response) => response.json())
          .then((data) => setdata(data));
  }

  const orderItems = data.map((order) =>
    <div className='container m-4 row bg-success rounded'>
      <img src={car1} className='col-4'/>
      <div className='col-8 my-4'>
        <h3>{order.productname}</h3>
        <h5>{order.amount}</h5>
        <h6 className='text-white'>Out for delivery</h6>
        <p style={{fontSize:"12px"}}>{order.address}</p>
      </div>

    </div>

    );

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      {(data.length ===0? 
          <div className='container text-center m-4'>You havent ordered anything</div>:
          <>
          {orderItems}
          </>)}
      
    </div>
  )
}
