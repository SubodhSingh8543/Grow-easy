import styles from "./Footer.module.css";
import { CgChevronRight } from "react-icons/cg";


function Footer1() {
    return (

        <div>
            <div className={styles.footermid}>

                <div>
                    <p className={styles.footermidtitle}>Product <CgChevronRight className={styles.FooterHeading}/></p>
                    <p>Subscription Management</p>
                    <p>Recurring Billing and Invoicing</p>
                    <p>Recurring Payments</p>
                    <p>Accounting and Taxes</p>
                    <p>SaaS Reporting</p>
                    <p>Enterprise Billing</p>
                    <p>Integrations</p>
                </div>

                <div>
                    <p className={styles.footermidtitle}>Help & Support  <CgChevronRight className={styles.FooterHeading}/></p>
                    <p>Security</p>
                    <p>FAQs</p>
                    <p>Status</p>
                    <p>Product Documentation</p>
                    <p>API Documentation</p>
                    <p>Supported Payment Gateways</p>
                    <p>Sitemap</p>

                </div>

                <div>
                    <p className={styles.footermidtitle}>Resources  <CgChevronRight className={styles.FooterHeading}/></p>
                    <p>Blog</p>
                    <p>Compare Payment Gateways</p>
                    <p>Tackling Payment Failures</p>
                    <p>Enterprise Billing Guide</p>
                    <p>Webinars</p>
                    <p>Events</p>
                    <p>Glossaries</p>
                    <p>Subscription Academy</p>
                </div>

                <div>
                    <p className={styles.footermidtitle}>Company  <CgChevronRight className={styles.FooterHeading}/></p>
                    <p>Customers</p>
                    <p>Partners</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Brand Guidelines</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>

    )
}

export default Footer1;