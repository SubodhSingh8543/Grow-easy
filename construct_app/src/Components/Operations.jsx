import styles from "./Operations.module.css";
import { MdCheckCircleOutline } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";

function Operations(){
    
    return (
        <div className={styles.OperationMainDiv}>
          <h1>Streamline Revenue Operations</h1>
          <p>Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
              While the MRR just keeps rolling.</p>
           <div>
            <div>
               <h1>Automate the Order-to-Revenue Lifecycle</h1>
               <p>Adjust price structures, product bundles, discount management, and recovery processes to maximize revenue.</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Price-modeling</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Usage-based Billing</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Plan & Product Catalog</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> 480+ Billing Scenarios</p>
               <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/billing-experiments.svg" alt="Error" />
            </div>
           </div>   
           <div>
            <div>
               <h1>Align Billing Workflow with GTM Strategy</h1>
               <p>Collect recurring payments and automate your subscription billing logic - from checkout to reconciliation.</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Quote-to-Cash</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Trial Management</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Tax Management</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Lifecycle Automation</p>
               <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/subscription-automation.svg" alt="Error" />
            </div>
           </div>   
           <div>
            <div>
               <h1>Drive Decisions with 360° Revenue Reporting</h1>
               <p>Recognize revenue accurately, forecast business growth, and plug leaks across your order-to-revenue cycle with real-time insights.</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Deferred Revenue Reporting</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Revenue Recognition</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Churn Reporting</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Report Builder</p>
               <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/revenue-intelligence.svg" alt="Error" />
            </div>
           </div>   
           <div>
            <div>
               <h1>Scale Revenue Stack for Each Stage of Growth</h1>
               <p>Upgrade finance, accounting, CRM, and more, on the revenue engine that scales with you.</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Sales, Revenue & Marketing</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Accounting & Finance</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Support & Engagement</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> Inventory & Logistics</p>
               <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/integration.svg" alt="Error" />
            </div>
           </div>   
           <div>
            <div>
               <h1>Promise Secure Subscription Experiences</h1>
               <p>Stay compliant with the latest taxation and privacy regulations to enter and scale new markets with agility.</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> SOC1 & SOC 2 Compliant</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> GDPR Ready</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> PCI-DSS Level 1</p>
               <p><MdCheckCircleOutline className={styles.CheckedIcon}/> 99.9% Uptime</p>
               <p>Learn more <CgArrowTopRight/> </p>
            </div>
            <div>
                <img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/security.png" alt="Error" />
            </div>
           </div>   
        </div>
    )
}

export default Operations;