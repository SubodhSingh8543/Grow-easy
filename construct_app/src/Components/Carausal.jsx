import { useEffect } from "react";
import { useState } from "react";
import styles from "./Carausal.module.css";
import { FaArrowRight} from "react-icons/fa";


let CarausalData = [
    {
        heading: "The subscription management platform that enabled Slidebean to slide into 30+ countries.",
        subHeadind: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        image: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png",
        id:1
    },
    {
        heading:"The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.",
        subHeadind: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        image: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/paul-kapsner.png",
        id:2
    },
    {
        heading:"The revenue engine that powered MakeSpace to launch a B2B model overnight",
        subHeadind: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        image: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/rahul-gandhi.png",
        id:3
    }
    ,
    {
        heading:"The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.",
        subHeadind: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        image: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/antoine-louiset.png",
        id:4
    }
    ,
    {
        heading:"The infrastructure that allows Rise Vision to ask “What Does This Make Possible?”",
        subHeadind: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        image: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/debbie-barrafato.png",
        id: 5
    }
]

// let ineterwal;

function Carausal(){
    const [timer , setTimer] = useState(0);


    useEffect(() => {
      setInterval(() => {
            setTimer((res) => { 
                if(res === CarausalData.length-1){
                   return 0;
                }
               return res+1
            });
        }, 2000);
    },[]);

    console.log(timer);

    return (
        <div className={styles.mainDiv}>
            <div>
            <h1>{CarausalData[timer].heading}</h1>
             <p>{CarausalData[timer].subHeadind}</p>
             <div>
                <button><p>Get a Demo</p> <FaArrowRight/> </button>
                <button> <p>Signup for free</p>  <FaArrowRight/></button>
             </div>
            </div>
            <div><img src={CarausalData[timer].image} alt="Error" /></div>
        </div>
    )
}

export default Carausal; 

