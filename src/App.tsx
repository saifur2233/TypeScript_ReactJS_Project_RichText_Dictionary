import React, { useRef, useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.currentTarget.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let amount = count;

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl text-secondary font-bold">
            TIRED OF BORING LOREM IPSUM?
          </h1>
          <form onSubmit={handleSubmit} className="flex justify-center py-6">
            <div className="form-control">
              <input
                type="number"
                min="0"
                max="8"
                placeholder="Paragraphs"
                className="input input-bordered w-full"
                name="amount"
                value={count}
                onChange={handleAmountChange}
              />
              <button type="submit" className="btn btn-secondary">
                Generate
              </button>
            </div>
          </form>
          <p className="py-6">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
