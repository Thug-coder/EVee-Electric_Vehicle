import React from 'react'
import img1 from "../assets/img1.jpg";
import newton from "../assets/newton.jpg"
import map from "../assets/map.jpeg"
import "../Css/AboutUs.css"

export default function AboutUs() {
  return (
    <div className="about">
      <div className = "aboutushead">
        <h1>About US</h1>
      </div>

     <div className="proimage">
        <a href="www.google.com"> <img src = {img1} alt = "Bike" /> </a>
     </div>

     <div className="companydetails">
       <h2>Name of the Company</h2>
       <h2>Some basic information about the company</h2>
       <h2>Information about the product</h2>
     </div>

     <div className="founderinfo">
      <div className="founderimg">
        <a href="https://en.wikipedia.org/wiki/Isaac_Newton"> <img id = "newton" src= {newton} alt="Founder" /></a>
      </div>
      <div className="foundertext">
        <h2>Name Of Owner</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue tellus hendrerit convallis pharetra. Quisque eu lectus risus. 
          Mauris convallis, metus vitae consectetur finibus, ex sapien interdum quam, non sodales metus sem in diam. 
          Morbi vulputate commodo est eu lobortis. Vivamus ultrices ullamcorper nulla, id blandit sapien semper id. 
          Quisque aliquet, massa finibus pharetra condimentum, nisi quam ullamcorper ante, volutpat ultrices justo diam non quam. 
          Vestibulum pharetra nec ipsum eget imperdiet. Fusce elementum mauris non ex mattis consequat.</p>
      </div>
     </div>
    
     <div className="placeinfo">
      <div className="mapping">
        <a href="https://www.google.com/maps/place/SIES+parking/@19.0424385,73.0219043,17.25z/data=!4m5!3m4!1s0x3be7c32c3126c233:0x8b9750bd172bf90!8m2!3d19.0426804!4d73.0226144"> <img id = "map" src= {map} alt="Map"/></a>
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
    </div>
  );
}