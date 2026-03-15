export default function Contact() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="page-title">Contact</h1>
            <p className="homePara">
              I'd love to hear from you. Reach out through any of the options below.
            </p>
            <div className="contact-links">
              <a href="mailto:your@email.com" className="contact-link">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
