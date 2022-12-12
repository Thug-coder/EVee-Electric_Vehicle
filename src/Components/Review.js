import React from 'react';
import { ReactDOM } from 'react';

import '../Css/Review.css';

function Review() {
  return (
    <>
      <div className="header_div"><h1 className="heading">Reviews of our Happy Customers !!</h1></div>

      <div className="wrapper">
        <Card
          img="https://www.shutterstock.com/image-vector/people-icon-vector-person-user-600w-1886517124.jpg"
          title="Parakh P"
          desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark,the service,the speed,the quality,the lovely people.
    This project should be applauded!!! "/>
       
        <Card
          img="https://www.shutterstock.com/image-vector/people-icon-vector-person-user-600w-1886517124.jpg"
          title="Devang"
          desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark,the service,the speed,the quality,the lovely people.
    
    This project should be applauded!!! "/>
        
        <Card
          img="https://www.shutterstock.com/image-vector/people-icon-vector-person-user-600w-1886517124.jpg"
          title="Aman P"
          desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark,the service,the speed,the quality,the lovely people.
    This project should be applauded!!! "/>

<Card
          img="https://www.shutterstock.com/image-vector/people-icon-vector-person-user-600w-1886517124.jpg"
          title="Sahil S"
          desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark,the service,the speed,the quality,the lovely people.
    This project should be applauded!!! "/>

      </div>
      <button className="card_btn1">
        
      <h1 className="heading2"> Add your views here :) </h1>
    
      </button> 
   

    </>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img}  className="card_img" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_des" >
          {props.desc}


        </p>
       
       </div> 
      
       <button className="card_btn">
        
      </button> 
     
     </div>
  )
}
export default Review;