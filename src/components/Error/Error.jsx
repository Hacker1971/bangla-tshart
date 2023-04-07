import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../../assets/error.json";

const Error = () => {
  return (
    <div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Error 404
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you're looking for isn't here.
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
              You might have the wrong address, or the page may have moved.
            </p>

            <Link
              to="/"
              className="w-full md:mx-5 mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0"
            >
              Back to homepage
            </Link>

            <Link
              to="/contact"
              className="w-full mb-2 btn btn-lg btn-white sm:w-auto sm:mb-0"
            >
              {" "}
              Contact us
            </Link>
          </div>
          <div>
            <div >
              <div className="relative lg:w-1/2 ">
                <div className="w-full lg:w-96 lg:ml-auto h-56  sm:h-96">
                  <Lottie animationData={reader} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
