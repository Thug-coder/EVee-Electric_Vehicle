import React, {useState} from 'react'
import map from "../assets/map.jpeg"
import '../Css/Freeride.css'
import '../Css/Login.css'

export default function FreeRide(props) 
{
  const register = (event)=>{
    event.preventDefault();
    if(name!="" && number.length ===10){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name:name,phone:number }),
      };
      fetch('http://localhost:5000/addfreeride', requestOptions)
          .then(response => response.json())
          .then(data => {
            if(data.message){
              alert(data.message)
            }else{
              alert(data.error);
            }
      });
    }
    else if(name===""){
      alert("Name is empty")
    }
    else if(number.length != 10){
      alert("Add a valid number")
    }
  }
  const [name, setName] = useState(props.name)
  const [number, setNumber] = useState("")
  return (
    <>
    <div className="Auth-form-container container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register for ride</h3>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  value={number}
                  onChange={(event)=>setNumber(event.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type='submit' className="btn btn-secondary" onClick={register}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>

    <div className="placeinfo">

      <div className="mapping">
        <a href="https://www.google.com/maps/place/SIES+parking/@19.0424385,73.0219043,17.25z/data=!4m5!3m4!1s0x3be7c32c3126c233:0x8b9750bd172bf90!8m2!3d19.0426804!4d73.0226144" target="_blank"> <img id = "map" src= {map} alt="Map" /></a>
      </div>

      <div className="showrooms">
        <h2>Mumbai showroom</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue tellus hendrerit convallis pharetra. Quisque eu lectus risus. 
          Mauris convallis, metus vitae consectetur finibus, ex sapien interdum quam, non sodales metus sem in diam. 
          Morbi vulputate commodo est eu lobortis. Vivamus ultrices ullamcorper nulla, id blandit sapien semper id. 
          Quisque aliquet, massa finibus pharetra condimentum, nisi quam ullamcorper ante, volutpat ultrices justo diam non quam. 
          Vestibulum pharetra nec ipsum eget imperdiet. Fusce elementum mauris non ex mattis consequat.</p>
      </div>

     </div>
    </>
    
  )
}

