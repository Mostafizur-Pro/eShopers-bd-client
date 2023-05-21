import React from "react";
import commentImage from "../../../assete/Comments/commentImage.jpg";

const Comments = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full">
        <div id="slide5" className="carousel-item relative w-full">
          <div
            className="hero h-96"
            style={{ backgroundImage: `url(${commentImage})` }}
          >
            <div className="hero-overlay bg-opacity-20"></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9kguQ5fi2512zkGaSpKWCYrQkJK0hRMPRQ&usqp=CAU" />
                  </div>
                </div>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <hr className="my-5" />

                <h1 className=" text-3xl font-bold">Holli Fenstermacher </h1>
                <p>Manager @ CIFP</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <div
            className="hero h-96"
            style={{ backgroundImage: `url(${commentImage})` }}
          >
            <div className="hero-overlay bg-opacity-20"></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img src="https://im.indiatimes.in/content/2021/Dec/Worlds-Most-Powerful-Women-2021_61b07b3a6dc44.jpg?w=1200&h=900&cc=1" />
                  </div>
                </div>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <hr className="my-5" />

                <h1 className=" text-3xl font-bold">Roshni Nadar</h1>
                <p>Manager @ CIFP</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <div
            className="hero h-96"
            style={{ backgroundImage: `url(${commentImage})` }}
          >
            <div className="hero-overlay bg-opacity-20"></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                  </div>
                </div>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <hr className="my-5" />

                <h1 className=" text-3xl font-bold">Shaun Humes </h1>
                <p>Manager @ CIFP</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide8" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <div
            className="hero h-96"
            style={{ backgroundImage: `url(${commentImage})` }}
          >
            <div className="hero-overlay bg-opacity-20"></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  </div>
                </div>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <hr className="my-5" />

                <h1 className=" text-3xl font-bold">Kathrina Culbartson</h1>
                <p>Manager @ CIFP</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
