import media_1 from "../../../../assets/media-1.png";
import media_2 from "../../../../assets/media-2.png";
import media_3 from "../../../../assets/media-3.png";
import media_4 from "../../../../assets/media-4.png";

import "./Media.css";

const Media = () => {
  return (
    <div className="media_wrapper">
      <div className="media_container container">
        <div className="heading_container">
          <h2>
            This is What <span>Media Saying</span> About Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>

        <div className="media_content">
          <div>
            <img src={media_1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={media_2} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={media_3} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={media_4} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={media_1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={media_3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
