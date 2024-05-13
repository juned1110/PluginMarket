import React, { useEffect, useRef } from "react";
import img from "./assets/img.png";
import GoogleFontLoader from "react-google-font-loader";
import gsap from "gsap";

const Login = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    tl.to(imgRef.current, {
      scaleX: -1,
      rotation: 360,
      duration: 1,
    }).to(imgRef.current, { rotation: "+=360", duration: 1 }, "-=1");
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <>
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="h-[70vh] w-[70vh] bg-zinc-400 py-10 px-10 rounded-l-lg">
              <img className="mt-14" src={img} alt="" ref={imgRef} />
            </div>

            <div className="relative h-[70vh] w-[70vh]">
              <div className="relative bg-[#f1f1f1] shadow h-[70vh] rounded-r-xl">
                <div className="flex items-center justify-between  md:p-5 border-b rounded-t ">
                  <h3
                    className="text-xl font-semibold text-gray-900"
                    style={{ fontFamily: "Play" }}
                  >
                    Sign in to our platform
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-900 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-[#03e9f4]"
                  >
                    <svg
                      className="w-3 h-3 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only" style={{ fontFamily: "Play" }}>
                      Close modal
                    </span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        style={{ fontFamily: "Play" }}
                        className="block mb-2 text-sm font-medium text-[gray-300] "
                      >
                        Your email / Mobile No.
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        style={{ fontFamily: "Play" }}
                        autoComplete="off"
                        className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg block w-full p-2.5 focus:bg-[#cfd1d6]"
                        placeholder="mobile no. / name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        style={{ fontFamily: "Play" }}
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        style={{ fontFamily: "Play" }}
                        className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg focus:bg-[#cfd1d6]  block w-full p-2.5 "
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-black rounded bg-[#03e9f4]"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium text-gray-900"
                          style={{ fontFamily: "Play" }}
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-blue-700 hover:underline"
                        style={{ fontFamily: "Play" }}
                      >
                        Lost Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-1 text-center text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] hover:text-black hover:bg-[#03e9f4] my-4"
                      style={{ fontFamily: "Play" }}
                    >
                      Login to your account
                    </button>
                    <div
                      className="text-sm font-medium text-gray-900 "
                      style={{ fontFamily: "Play" }}
                    >
                      Not registered?{" "}
                      <a
                        className="text-blue-700
                        hover:underline "
                        style={{ fontFamily: "Play" }}
                      >
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
