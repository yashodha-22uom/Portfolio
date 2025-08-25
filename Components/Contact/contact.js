"use client";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon email-icon">
              <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-email-mail-application-vector-png-image_12256702.png" alt="Email" />
            </div>
            <h3 className="card-title">Email</h3>
            <p className="card-value">wickramadharay@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <div className="card-icon phone-icon">
              <img src="https://freepngimg.com/thumb/telephone/75359-mobile-phones-button-telephone-call-logo-now.png" alt="Phone" />
            </div>
            <h3 className="card-title">Phone</h3>
            <p className="card-value">+94 77 5091241</p>
          </div>
          
          <div className="contact-card">
            <div className="card-icon location-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" />
            </div>
            <h3 className="card-title">Location</h3>
            <p className="card-value">Balangoda, Sri Lanka</p>
          </div>
        </div>
        
        <div className="social-section">
          <h3 className="social-title">
            Connect with me on <span className="highlight">Social Media</span>
          </h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yashodha-wickramadharay" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/yashodha-wickramadharay" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <img src="https://zcoregroup.com/assets/images/blog/GitHub-Apps.png" alt="GitHub" />
            </a>
            <a href="https://wa.me/94775091241" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/564/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" alt="WhatsApp" />
            </a>
            <a href="https://www.instagram.com/yashodha_wickramadharay" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}