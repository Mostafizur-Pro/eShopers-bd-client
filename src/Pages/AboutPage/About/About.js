import React from "react";
import aboutImg from "../../../assete/aboutpage/about.avif";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 ">
        <div className="grid-cols-1">
          <img src={aboutImg} alt="Album" />
        </div>
        <div className=" grid-cols-1 mt-20">
          <p className="font-semibold text-xl">I'm a Desinger of GoTo Store</p>
          <h2 className="card-title text-5xl my-3">I'm Mostafiz</h2>

          <section className="font-semibold text-xl">
            <div>
              <p className="text-justify">
                Dedicated and efficient web developer with a passion for
                creating clean, responsive designs that provide an exceptional
                user experience. Skilled in HTML, CSS, JavaScript and various
                web development frameworks. Details-oriented web developer with
                a strong background in front-end and back-end development.
                Proficient in a variety for web development languages and
                frameworks, including Reactjs, Redux and Nextjs.
              </p>
            </div>
            <div className="mt-10">
              <p>Email: mostafizur0195@gmail.com</p>
              <p>Number: +880 01950 165017 </p>
              <p>
                {" "}
                Portfolio:{" "}
                <a
                  className="text-cyan-400"
                  href="https://mostafizur-pro.web.app/"
                >
                  Profile
                </a>{" "}
              </p>
            </div>
            <div className="mt-10 flex gap-3">
              <button className=" bg-sky-700 p-3 rounded-md text-white">
                Facebook
              </button>
              <button className="bg-red-700 p-3 rounded-md text-white">
                YouTube
              </button>
              <button className="bg-slate-800 p-3 rounded-md text-white">
                Github
              </button>
              <button className="bg-sky-700 p-3 rounded-md text-white">
                LinkedIn
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
