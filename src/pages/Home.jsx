import { useOutletContext } from "react-router";
import { Product } from "../components/Product";

export function Home() {
  const { products } = useOutletContext();
  return <Product />;
}
