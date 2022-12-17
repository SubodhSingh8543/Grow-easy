import styles from "./Navbar.module.css";
import img1 from "./img1.png";
// import { FontAwesomeIcon } from 
import { FaUnlock ,FaGlobeAfrica} from "react-icons/fa";
import { Link, Navigate, useNavigate, } from "react-router-dom";


function Navbar(){
  const navigate1 = useNavigate();

  const handleLogin = () => {
    navigate1("/login");
  }

    return (
        <div className={styles.mainDiv}>
          <div>
            <img src={img1} alt="Error"/>
            <p>Product</p>
            <p>Pricing</p>
            <p>Solutions</p>
            <p>Customers</p>
            <p>Resources</p>
            <p>Partners</p>
          </div>
          <div>
            <p><FaGlobeAfrica style={{color:"#ff7846"}}/>{" "}{"  Language"}</p>
            <p onClick={() => handleLogin()}><FaUnlock style={{color:"#ff7846"}}/> {"Log in  >"}</p>
            <button>Get a Demo {">"}</button>
          </div>
        </div>
    )
}

export default Navbar;