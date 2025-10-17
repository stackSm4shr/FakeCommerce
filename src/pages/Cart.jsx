import { useOutletContext } from "react-router";
import { Counter } from "../utils/Counter";

export function Cart() {
  const { products } = useOutletContext();
  return (
    <div>
      <ul className="list">
        <li className="list-row">
          <div>
            <img
              className="w-40 rounded-box"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </div>
          <div>
            <div>Title</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Price $
            </div>
          </div>
          <div>
            <div>description</div>
          </div>
          <Counter />
          <div>
            <p>Total</p>
          </div>
        </li>
      </ul>
      <div className="list-row">
        <button className="btn btn-primary">reset</button>
        <button className="btn btn-primary">checkout</button>
      </div>
    </div>
  );
}
