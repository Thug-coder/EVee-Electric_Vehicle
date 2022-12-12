import React,{useState} from 'react';
import Mynavbar from './Components/Mynavbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import ChargeUp from './Components/ChargeUp';
import Login from './Components/Login';
import FreeRide from './Components/FreeRide';
import Footer from './Components/Footer';
import BuyPro from './Components/BuyPro'
import Orders from './Components/Orders'
import ProductDetails from './Components/ProductDetails';
import OrderModal from './Components/OrderModal';
require('dotenv').config()



function App() {

  const [username, setUsername] = useState("")
  // const data  = {
  //   name:"Evee vG",
  //   range:"150",
  //   topSpeed:"100",
  //   speedrange:"0 to 40 km/h",
  //   timerange:"4.3",
  //   speedrange2:"0 to 100 km/h",
  //   timerange2:"6.3",
  //   price:"Rs "+"90,000"+"/-",
  //   aboutcar:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
  //   aboutcar2:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum. (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
  //   modes:"Eco, Normal, Sports",
  //   chargetime:"4.30",
  //   power:"5.55",
  //   weight:"500"
  // }
  const [userid, setUserid] = useState("")
  const navigator = useNavigate()

  const signUpAuth = (email, password)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email,password }),
    };
    fetch('http://localhost:5000/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.username){
            console.log("Signed in");
            navigator('/')
            alert("Successfully signed in")
            setUsername(data.username)
            setUserid(data.userid)
            return true;
          }else{
            alert(data.error)
            return false;
          }
      });
  }
  const logout = ()=>{
    navigator('/')
    setUsername("")
  }

  return (
    <div className="App">
      {/* <Router> */}

    <Mynavbar username={username} logout={logout}/>

        <Routes>

          <Route path='/' element={<Home userid={userid}/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/productdetail' element={<ProductDetails userid={userid}/>}/>
          <Route path='/chargeup' element={<ChargeUp/>}/>
          <Route path='/login' element={<Login onSignIn={signUpAuth}  navigator={navigator} />}/>
          <Route path='/freeride' element={<FreeRide name={username}/>}/>
          <Route path='/orders' element={<Orders userid={userid}/>}/>

        </Routes>

      {/* </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
