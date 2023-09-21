import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe_wrapper">
      <div className="subscribe_container container h-100">
        <div className="row g-5 h-100">
          <div className="col-lg-6">
            <div className="subscribe_content_left">
              <h3 className="title">subscribe for updates</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur. Quisque dolor
                scelerisque aliquet pulvinar vitae ante erat. Amet morbi posuere
                leo turpis ipsum. Senectus maecenas eros consectetur integer
                habitasse quisque.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe_content_right">
              <div className="email_input_box">
                <input type="email" placeholder="Enter Email Address" />
                <button>Send</button>
              </div>

              <div className="check_box">
                <input type="checkbox" id="agree" className="checkbox_input" />
                <label htmlFor="agree">I agree all term and condition</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
