import "./style.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer  from "./components/Footer";
import Popup from "./components/Popup";
import Header from "./components/Header";
import { useState } from "react";
import { Routes, Route } from "react-router";

const App = ()=> {
    const [cart, setCart]=useState(40);
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="container" >
        <Header cart={cart} setCart={setCart} show={show} setShow={setShow} onClick={()=>{
            setShow(!show);
        }}/>
       <Routes>
        <Route path="/" element={<Home show={show} setShow={setShow}/> }/>
        <Route path={"/Cart"} element={<Cart setCart={setCart} />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       {show && <Popup setShow={setShow}/> }
        </div>
        <Footer/> </>

    );
}
export default App;