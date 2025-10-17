import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  };
  if (count === 0) {
    return (
      <div>
        <button className="btn btn-primary" onClick={increase}>
          Add to cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="list-row">
        <button className="btn btn-primary" onClick={increase}>
          +
        </button>
        <p>{count}</p>
        <button className="btn btn-primary" onClick={decrease}>
          -
        </button>
      </div>
    );
  }
}
