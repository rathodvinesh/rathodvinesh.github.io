import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-1 md:py-2 mb-1">
        <div className="container max-w-screen-xl mx-auto px-2">
          <div className="text-center">
            <p className="font-normal text-gray-400 text-sm md:text-base mb-2">
              Feel Free to Contact Me
            </p>

            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://www.x.com/Vinesh_0001"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="twitter"
                  className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="https://www.linkedin.com/in/rathodvinesh"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="linkedin"
                  className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"
                ></i>
              </a>

              {/* <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="dribbble"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a> */}

              {/* <a
                href="https://www.facebook.com/rathodvinesh"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="facebook"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a> */}

              {/* <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="codepen"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a> */}

              <a
                href="mailto:rathodvinesh27@gmail.com?subject=Job%20Opportunity%20for%20You&body=Hi%20Vinesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AJob%20Details%3A%0A-------------------%0ACompany%3A%0APosition%3A%0ALocation%3A%0AJob%20Type%3A%20(Full-time%2FPart-time%2FContract)%0A%0ARequired%20Skills%3A%0A-------------------%0A-%20%0A-%20%0A-%20%0A%0AProject%20Details%20(if%20any)%3A%0A-------------------%0A%0A%0AI%20would%20love%20to%20schedule%20a%20call%20to%20discuss%20this%20opportunity%20in%20detail.%20Please%20let%20me%20know%20your%20availability.%0A%0ABest%20regards%2C%0A"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="at-sign"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="https://www.instagram.com/rathod_vinesh27"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="instagram"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              © 2025 Made with <span className="text-red-500">♥</span> by <span className="font-medium text-gray-500 hover:text-gray-700">Vinesh Rathod</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
