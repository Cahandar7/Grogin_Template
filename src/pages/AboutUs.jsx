import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="image"
          width={72}
          height={57}
        />
        <h1>About us</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Learn More
            </button>
            <Link to={"/"} type="button" className="btn btn-dark btn-lg px-4">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
