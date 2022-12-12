import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import car1 from "../assets/car1.jpg";
import "../Css/Products.css"

const Products = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        fetch('http://localhost:5000/getproducts')
              .then((response) => response.json())
              .then((data) => setData(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])
    const listItems = data.map((product) =>
        // <div className="card" key={item.id}>
        //     <div className="card_img">
        //         <img src={item.thumb} />
        //     </div>
        //     <div className="card_header col-lg-3">
        //         <h2>{item.product_name}</h2>
        //         <p>{item.description}</p>
        //         <p className="price">{item.price}<span>{item.currency}</span></p>
        //         <div className="btnProduct">see details</div> 
                
        //     </div>
        // </div>
        <Link to="/productdetail" state={product} className="col-md-4 my-2"> 
            <div className='rounded position-relative' key={product.name}>
                <div className="card rounded" style={{width: "18rem;"}}>
                    <img className="card-img-top cardimage" src={car1} alt="Card image cap"/>
                    <div className="cardtext position-absolute">
                        {product.name}
                    </div>
                </div>
            </div>
        </Link>
    );
    return (
        <div className='container'>
            <div className="row p-4">
                {listItems}
            </div>
        </div>

    )
}
export default Products;
