import { FetchProducts } from "./FetchProduct.jsx";

export function Product() {
  const { products, loading } = FetchProducts();
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-base-100 w-96 shadow-sm border"
        >
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.price} $</p>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
