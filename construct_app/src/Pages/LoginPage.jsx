import styles from "./Login.module.css";
import img1 from "../Components/img1.png"
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
    email: "",
    password: ""
}

const fetchReq = async (details) => {
    let fetchDat = await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body: JSON.stringify(details),

        headers: {
            'Content-type' : 'application/json'
        },
    });

    let responce = await fetchDat.json();
    // console.log(responce);
    return responce;
}

function LoginPage() {
  const [formState, SetFormState] = useState(initState);
  const [token , setToken] = useState();
  const {isAuth , login ,token1} = useContext(AuthContext);
  const navigate1 = useNavigate();


  const handleChange = (e) => {
    SetFormState({ ...formState, [e.target.name]: e.target.value });
  }

   const { email, password} = formState;

   const handleSubmit =async (e) =>{
    e.preventDefault();
    let to = await fetchReq(formState);
  
    setToken(to.token);
    login(to.token);
    if(to.token){
        navigate1("/");
    }
   }
   console.log(token1);

     return(
        <div className={styles.MainDiv}>
         <div style={{display: "flex",justifyContent:"space-between",alignItems:"center"}}>
            <img style={{height:"70px"}} src={img1} alt="Error" />
            <p>Don't have an account? <b>Sign up →</b></p>
         </div>
         <div style={{height:"400px",width:"350px",margin: "auto",borderRadius:"7px",marginTop:"70px"}}>
           <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"15px"}}>
            <p style={{fontFamily:"-apple-system,, Roboto, Helvetica, Arial, sans-serif",fontSize:"14px" ,fontWeight:"bolder",color:"#646468",textAlign:"start",lineHeight:"21px"}}>Sign in to Groweasy!</p>
            <input onChange={handleChange} name="email" value={email} style={{lineHeight:"21px",fontSize:"14px",height:"38px",boxShadow:"rgba(0, 0, 0, 0.12) 1px 1px 2px 0px inset",borderRadius:"4px",paddingLeft:"10px",border:"1px solid #b4b4be"}} type="text" placeholder="name@company.com" />
            <input onChange={handleChange} name="password" value={password} style={{lineHeight:"21px",fontSize:"14px",height:"38px",boxShadow:"rgba(0, 0, 0, 0.12) 1px 1px 2px 0px inset",borderRadius:"4px",paddingLeft:"10px",border:"1px solid #b4b4be"}} type="password" placeholder="password"/>
            <div style={{display:"flex", justifyContent:"space-between",alignContent:"center"}}> <input style={{lineHeight:"21px",fontSize:"14px",height:"38px",boxShadow:"rgba(0, 0, 20, 0.08) 0px 1px 2px 0px",borderRadius:"4px",paddingLeft:"10px",border:"none",backgroundColor:"#ff7846",width:"110px" , color:"white",fontWeight:"bold",fontSize:"14px"}} type="submit" value="Sign in"/> <p style={{marginTop:"10px",fontSize:"12px",color:"#646468"}}>Forgot password?</p> </div>

           <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}> <hr style={{width:"47%",height:"1px",backgroundColor:"#b4b4be",border:"none"}} /> <p style={{color:"#b4b4be"}}>or</p> <hr style={{width:"47%",height:"1px",backgroundColor:"#b4b4be",border:"none"}}/></div>
            <img style={{width:"230px",margin:"auto"}} src="https://tse1.mm.bing.net/th?id=OIP.8joJH8aNu0fn4VjJzR5qYgHaDF&pid=Api&P=0" alt="Error" /> 
            <p style={{color:"#3367d6", marginTop:"-17px"}}>Sign in with Single Sign-On</p>
           </form> 
         </div>

         <p>🌎 You are on our US data hosting centre. Switch to our EU or AU data hosting centre.</p>
        <h1>Login Page</h1>
        </div>
    )
}

export default LoginPage;