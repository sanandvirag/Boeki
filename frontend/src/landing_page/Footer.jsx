import './Footer.css'

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row first-half">
          <div className="col-4">
            <img style={{width:"40%"}} src="/logo.svg" alt="" />
            <p className="mt-4 ">© 2010 - 2026, Boeki Broking Ltd.</p>
            <p >All rights reserved.</p>
            <span><i className="fa-brands fa-x-twitter"></i></span>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
            <span><i className="fa-brands fa-linkedin"></i></span>
            <hr></hr>
            <span><i className="fa-brands fa-youtube"></i></span>
            <span><i className="fa-brands fa-whatsapp"></i></span>
            <span><i className="fa-brands fa-telegram"></i></span>
            <br />
            <a href=""><img style={{width:"24%", height:"2rem", marginRight:"2rem", marginTop:"2rem"}} src="/appstoreBadge.svg" alt="" /></a>
            <a href=""><img style={{width:"24%", height:"2rem",marginRight:"2rem", marginTop:"2rem"}} src="/googlePlayBadge.svg" alt="" /></a>
          </div>

          <div className="col-2">
            <h6><b>Account</b></h6>
            <ul >
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>HUF demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
            </ul>
          </div>

          <div className="col-2">
            <h6><b>Support</b></h6>
            <ul >
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div className="col-2">
            <h6><b>Company</b></h6>
            <ul >
              <li>About</li>
              <li>Philosophy</li>
              <li>Press &amp; media</li>
              <li>Careers</li>
              <li>Boeki Cares (CSR)</li>
              <li>Boeki.tech</li>
              <li>Open source</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div className="col-2">
            <h6><b>Quick links</b></h6>
            <ul >
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
              <li>Gift Nifty</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 second-half">
          <p >
            Boeki Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Boeki Broking Ltd. – SEBI Registration no. IN-DP-431-2019 Registered Address: Boeki Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, JP Nagar 4th Phase, Bengaluru – 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@Boeki.com</a>, for DP related to <a href="#">dp@Boeki.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p >
            Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>

          <p >
            <a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a>
          </p>

          <p >
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>

          <p >
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f. September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p >
            India's largest broker based on networth as per NSE. <a href="#">NSE broker factsheet</a>
          </p>

          <p >
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorise your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Boeki and offering such services, please <a href="#">create a ticket here</a>.
          </p>

          <p >
            *Customers availing insurance advisory services offered by Ditto (Tactieral Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

          <p >
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Boeki Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>

        </div>
      </div>
    </>
  );
}

export default Footer;