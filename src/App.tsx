import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl text-secondary font-bold">
            TIRED OF BORING LOREM IPSUM?
          </h1>
          <form className="flex justify-center py-6">
            <div className="form-control">
              <label className="input-group">
                <input
                  type="number"
                  min="1"
                  max="8"
                  placeholder="Paragraphs"
                  className="input input-bordered w-full"
                />
                <span>Generate</span>
              </label>
            </div>
          </form>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
