import { useState } from "react";
import useShop from "../ShopContext";
import Products from "./Products";

const Payments = () =>{

    const {clearCart}=useShop();
    const initialPayment ={
        sahal : false,
        evc : false,
        zaad : false
    }
    const [paymentMethod, setPaymentMethod]=useState(initialPayment);
    const [phone, setPhone] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!phone) return alert("Phone is required!")
            else {
        
                alert("successfully Payed The Money");
                clearCart(Products)
        };
    }

    return(
        <div className="payments">
            <h1 className="payment-title">Payment</h1>
            <div className={`payment-method ${paymentMethod.sahal && "selected"}`} onClick={()=>{
                setPaymentMethod({...initialPayment, sahal:true})
            }}>
                <h4>Sahal </h4>
            </div>
            <div className={`payment-method ${paymentMethod.evc && "selected"}` } onClick={()=>{
                setPaymentMethod({...initialPayment, evc:true})
            }}>
                <h4>EVC</h4>
            </div>
            <div className={`payment-method ${paymentMethod.zaad && "selected" } `} onClick={()=>{
                setPaymentMethod({...initialPayment, zaad:true})
            }}>
                <h4>Zaad</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="252090..." className="form-control i" onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
                <input type="submit" value="PROCEED!" className="form-control pro"/>
            </form>
        </div>
    )
}

export default Payments;