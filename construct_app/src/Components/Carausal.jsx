import { useEffect } from "react";
import { useState } from "react";
import styles from "./Carausal.module.css";
// function carousel() {

//     let images = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/927/1360927-h-375c5733d218", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8189/1378189-h-0fe20dd60afa", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/6845/1376845-h-d0e066aa0374", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e"];

//     let imgElement = document.createElement("img");


//     imgElement.src = images[0];
//     cauresol_div.append(imgElement);

//     let i = 1;

//     setInterval(function () {



//         if (i === images.length) {
//             i = 0;
//         }
        
//         imgElement.src = images[i];
//         cauresol_div.append(imgElement);


//         i++;

//     }, 3000);


// }

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

function Carausal(){
    const [data, setData] = useState(0);
    const [timer , setTimer] = useState(0);
    
    useEffect(() => {
        setInterval(() => {
            setTimer((res) => res+1);
        }, 1000);
    },[]);
    console.log(timer);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setCount((prev) => {
    //         console.log(prev);
    //         if (prev === 10) {
    //           // clearInterval(intervalId);
    //           prev = 0;
    //         }
    //         return prev + 1;
    //       });
    //     }, 1000);
    
    //     // const cleanup = () => {
    //     //   clearInterval(intervalId);
    //     //   console.log(`cleanup is called`);
    //     // };
    //     // return cleanup;
    //   },[]);


    return (
        <div className={styles.mainDiv}>
            <div>
            {CarausalData.map((item) => (
               <p key={item.id}>{item.heading}</p>
            ))}
            </div>
            <div></div>
        </div>
    )
}

export default Carausal; 

