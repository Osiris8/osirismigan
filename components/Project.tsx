import { ExternalLink, Github } from "lucide-react";

export default function Project() {
  return (
    <div className="container max-w-3xl mx-auto p-6">
      <h2 className="text-3xl mb-6 font-bold text-center">Projects</h2>
      <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="flex flex-wrap">
                <div className="badge m-2 bg-base-300">Next.js</div>
                <div className="badge m-2 bg-base-300">Typescript</div>
                <div className="badge m-2 bg-base-300">MongoDB</div>
              </div>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">
                  <Github />
                  View Code
                </button>
                <button className="btn border-slate-300">
                  <ExternalLink />
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="flex flex-wrap">
                <div className="badge m-2 bg-base-300">Next.js</div>
                <div className="badge m-2 bg-base-300">Typescript</div>
                <div className="badge m-2 bg-base-300">MongoDB</div>
              </div>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">
                  <Github />
                  View Code
                </button>
                <button className="btn border-slate-300">
                  <ExternalLink />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">
                  <Github />
                  View Code
                </button>
                <button className="btn border-slate-300">
                  <ExternalLink />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">
                  <Github />
                  View Code
                </button>
                <button className="btn border-slate-300">
                  <ExternalLink />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
