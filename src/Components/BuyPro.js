import React from 'react'
import s1 from "../assets/scene1.jpg";
import s2 from "../assets/scene2.jpg";
import s3 from "../assets/scene3.jpg";
import "../Css/BuyPro.css"

export default function BuyPro() 
{
  const data = {
    name:"Evee vG",
    range:"150",
    topSpeed:"100",
    speedrange:"0 to 40 km/h",
    timerange:"4.3",
    speedrange2:"0 to 100 km/h",
    timerange2:"6.3",
    price:"Rs "+"90,000"+"/-",
    aboutcar:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    aboutcar2:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    modes:"Eco, Normal, Sports",
    chargetime:"4.30",
    power:"5.55",
    weight:"500"
  }

  return (
    <>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={s1}  alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <div className='forbox'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 py-4'>Range<br/><span>{data.range}</span><span>KM</span></div>
          <div className='col-md-3 col-6 py-4'>Top Speed<br/><span>{data.topSpeed}</span><span>KM/Hr</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange}<br/><span>{data.timerange}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange2}<br/><span>{data.timerange2}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>Modes<br/><span>{data.modes}</span></div>
          <div className='col-md-3 col-6 py-4'>Charging Time<br/><span>{data.chargetime}</span><span>Hrs</span></div>
          <div className='col-md-3 col-6 py-4'>Motor Power<br/><span>{data.power}</span><span>kW</span></div>
          <div className='col-md-3 col-6 py-4'>Weight<br/><span>{data.weight}</span><span>Kg</span></div>
          <div className='col-md-12 col-6 py-4'>Information<br/><span>{data.aboutcar}</span></div>
        </div>
        </div>

      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <div className='forbox'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 py-4'>Range<br/><span>{data.range}</span><span>KM</span></div>
          <div className='col-md-3 col-6 py-4'>Top Speed<br/><span>{data.topSpeed}</span><span>KM/Hr</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange}<br/><span>{data.timerange}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange2}<br/><span>{data.timerange2}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>Modes<br/><span>{data.modes}</span></div>
          <div className='col-md-3 col-6 py-4'>Charging Time<br/><span>{data.chargetime}</span><span>Hrs</span></div>
          <div className='col-md-3 col-6 py-4'>Motor Power<br/><span>{data.power}</span><span>kW</span></div>
          <div className='col-md-3 col-6 py-4'>Weight<br/><span>{data.weight}</span><span>Kg</span></div>
          <div className='col-md-12 col-6 py-4'>Information<br/><span>{data.aboutcar}</span></div>
        </div>
        </div>
 
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1577473403731-a36ec9087f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVyY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <div className='forbox'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 py-4'>Range<br/><span>{data.range}</span><span>KM</span></div>
          <div className='col-md-3 col-6 py-4'>Top Speed<br/><span>{data.topSpeed}</span><span>KM/Hr</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange}<br/><span>{data.timerange}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>{data.speedrange2}<br/><span>{data.timerange2}</span><span>sec</span></div>
          <div className='col-md-3 col-6 py-4'>Modes<br/><span>{data.modes}</span></div>
          <div className='col-md-3 col-6 py-4'>Charging Time<br/><span>{data.chargetime}</span><span>Hrs</span></div>
          <div className='col-md-3 col-6 py-4'>Motor Power<br/><span>{data.power}</span><span>kW</span></div>
          <div className='col-md-3 col-6 py-4'>Weight<br/><span>{data.weight}</span><span>Kg</span></div>
          <div className='col-md-12 col-6 py-4'>Information<br/><span>{data.aboutcar}</span></div>
        </div>
        </div>

      </div>
    </div>

  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  
    </>
    
  )
}


