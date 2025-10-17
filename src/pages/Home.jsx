import { useOutletContext } from "react-router";

export function Home() {
  const { destinations } = useOutletContext();
  return <h1 className="text-2xl ">FakeCommerce</h1>;
}
