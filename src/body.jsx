import './body.css';

function BodySection() {
  return (
    <div className="body-section">
      <div className="main-image">
        <img src="/background.jfif" alt="Family Wellness" />
      </div>
      <div className="intro-text">
        <h2>Think Health. Think Massage.</h2>
        <p>We are open 9am to 6pm, Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
        <button>Learn More About Us</button>
        <button>Contact Us Today</button>
      </div>
      <div className="additional-info">
        <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
        <p>We are committed to your long-term health and wellbeing. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
      </div>
    </div>
  );
}

export default BodySection;
