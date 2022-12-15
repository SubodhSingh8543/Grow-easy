import styles from "./LiftedCards.module.css";
import img2 from "./img2.png";
import { CgArrowTopRight } from "react-icons/cg";

function LiftedCards(){
    return(
      <div className={styles.mainCardDiv}>
        <div>
            <h2>Designed to go Beyond Billing.</h2>
            <p>Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.</p>
            <img src={img2} alt="Error" />
        </div>
        <div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg" alt="Error" />
                <p>Rethink Pricing</p>
                <p>Pricing models.<br/> GrangFathering.One-click roll-back. Dosen't get esier!</p>
                <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/scale-globally.svg" alt="Error" />
                <p>Scale Globally</p>
                <p>Currencies, compliance & taxes,all handled already.</p>
                <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/capture-new-segments.svg" alt="Error" />
                <p>Capture New Segments</p>
                <p>March upmarket, go product-led, and everywhere between.</p>
                <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/launch-into-subscriptions.svg" alt="Error" />
                <p>Launch into Subscriptions</p>
                <p>Pilot a recurring revenue model without breaking what's working</p>
                <p>Learn more <CgArrowTopRight/> </p>
            </div>
        </div>
      </div>
    )
}

export default LiftedCards;