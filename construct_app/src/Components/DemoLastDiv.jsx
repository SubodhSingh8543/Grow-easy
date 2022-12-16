import styles from "./DemoLastDiv.module.css";

function LastDiv(){


    return(
        <div className={styles.mainDiv}>
            <div>
                <div>
                    <h1 style={{
                        textAlign : "start",
                        marginLeft: "10%",
                        color: "white",
                    }}>
                     Get a Demo Customized to Your Subscription Workflow
                    </h1>
                    <div style={{borderRadius: "50px", width: "400px", marginLeft:"10%",backgroundColor:"#181064", padding:"5px"}}>
                     <input  style={{
                        height: "44px",
                        width: "210px",
                        border: "none",
                        backgroundColor:"#181064",
                        borderRadius: "50px",
                        color: "white",
                        

                     }} type="text" placeholder="email@gmail.com"/>
                     <button style={{
                        height: "46px",
                        width: "110px",
                        border: "none",
                        borderRadius: "50px",
                        marginLeft: "70px",
                        backgroundColor: "#7f45ff",
                        color:"white",
                        fontWeight: "bold"
                     }}>Get a demo</button>
                    </div>
                </div>
                <div style={{padding:"10px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"12px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(176, 176, 176, 0.26) 0px 1px 8px 1px"}}>
                    <img style={{
                        width:"100px",
                        height: "100px",
                        borderRadius: "50%",
                        
                    }} src="https://webstatic.chargebee.com/assets/web/543/images/footer/robin-lambert.png" alt="error" />
                    <p style={{textAlign:"start"}}>Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.</p>
                    <p style={{textAlign:"start",fontWeight:"bold"}}>Robin Lambert,</p>
                    <p style={{textAlign:"start",}}>Co-founder & CPO, Livestorm</p>
                </div>
            </div>
        </div>
    )
}

export default LastDiv;