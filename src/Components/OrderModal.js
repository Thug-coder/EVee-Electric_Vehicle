import React,{useState} from "react";
import "../Css/OrderModal.css";

export default function OrderModal(props) {
  const [address, setAddress] = useState("")
  const closeModal = ()=>{
    props.closeOrderModal();
  }

   //Razor pay integration
   const loadScript = (src) => {
    return new Promise( (resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const displayRazorpay = async () => {
    if(address===""){
      alert("Please enter Address")
      return;
    }

      const res = await loadScript ('http://checkout.razorpay.com/v1/checkout.js')
      if (!res){
        alert('Check your connection...Loading Razorpay Failed...')
        return
      }
  
      const options ={
        key:'rzp_test_5gzhcdXn6n5plT',
        currency:'INR',
        amount: parseInt(props.price.replace(/,/g, ''))*100,
        name: 'Evee',
        description:'Thanks for shopping',
        image:'idhar logo daal website ka warna yeh hata de ur wish',
        handler: async function (response){
          // alert(response.razorpay_payment_id)
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userid:props.userid, productid:props.productid, address:address,paymentid:response.razorpay_payment_id, amount:props.price, productname:props.productname}),
          };
          await fetch('http://localhost:5000/addorder', requestOptions)
              .then(response => response.json())
              .then(data => {
                alert(data.message)
            });
          // alert("Payment Successful")
        },
        prefill :{
          name:"Evee"
        }
      };
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    
  }
  return (
    <div className="Modal">
      <div onClick={closeModal} className="Overlay"></div>
      <div className="Modal-content">
        <h2 className="p-4">Fill in the details to continue</h2>
        <label>Enter address</label>
                <textarea
                  type="text"
                  onChange={(event)=>setAddress(event.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter Full Address"
                />
                <div className="container my-4 text-center">

                <button className="btn btn-dark" onClick={displayRazorpay}>Proceed to Pay</button>
                </div>
        <button className="Close-modal text-danger" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}