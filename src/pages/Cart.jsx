import { useOutletContext } from "react-router";

export function Cart() {
  const { destinations } = useOutletContext();
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
          <div className="list-row">
            <button className="btn btn-primary">-</button>
            <p>Amount</p>
            <button className="btn btn-primary">+</button>
          </div>
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
