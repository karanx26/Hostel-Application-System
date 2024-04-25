import "../styles/contact.css";
function Contact() {
  return (
    <div id="contact-wrapper">
      <div id="contact">
        <div className="tab1">
          <i className="fa-solid fa-phone"></i>
          <p>+91 79 23275078/ 82/ 90</p>
        </div>
        <div className="tab2">
          <i className="fa-solid fa-location-dot"></i>
          <p>
            Pandit Deendayal Energy University Knowledge Corridor, Raisan
            Village, Gandhinagar - 382426 Gujarat (State), INDIA
          </p>
        </div>
        <div className="tab3">
          <i className="fa-solid fa-envelope-open"></i>
          <p>hostel@pdpu.ac.in</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
