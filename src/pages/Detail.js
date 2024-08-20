import { defer } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { fetchData } from "../function";

function DetailPage() {
  return (
    <>
      <Header title="DEATAIL" />
      <ProductDetail />
    </>
  );
}

export default DetailPage;

const fetchDetail = async (productId) => {
  const res = await fetchData(`product/${productId}`, "GET", null);
  if (!res.ok) throw new Error();
  const data = await res.json();
  return data;
};

export async function loader({ params }) {
  const productId = params.productId;
  try {
    return defer({
      product: fetchDetail(productId),
    });
  } catch {
    throw new Error();
  }
}
