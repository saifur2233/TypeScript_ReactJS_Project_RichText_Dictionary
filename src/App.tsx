import React, { useRef, useState } from "react";
import data from "./data";
import NavBar from "./NavBar/NavBar";
import { FaCopy } from "react-icons/fa";
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
    <div className="min-h-screen bg-base-200">
      <NavBar></NavBar>
      <div className="p-12">
        <h1 className="text-5xl text-center text-primary font-bold">
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <div>
          <form onSubmit={handleSubmit} className="flex justify-center py-4">
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
              <button type="submit" className="btn btn-primary">
                Generate
              </button>
            </div>
          </form>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {text.map((item, index) => {
            return (
              <div
                key={index}
                className="card card-bordered bg-base-100 shadow-xl"
              >
                <div className="card-title flex justify-end">
                  <button className="btn btn-sm btn-primary">
                    <FaCopy></FaCopy> COPY
                  </button>
                </div>
                <div className="card-body">
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
