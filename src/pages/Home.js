import { defer } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import HomeList from "../components/HomeList/HomeList";
import OtherInformation from "../components/OtherInformation/OtherInformation";
import { fetchData } from "../function";

function HomePage() {
  return (
    <>
      <Banner />
      <Category />
      <HomeList />
      <OtherInformation />
    </>
  );
}

export default HomePage;

const fetchIndex = async () => {
  const res = await fetchData("product?type=index", "GET", null);
  if (!res.ok) throw new Error();
  const data = await res.json();
  return data;
};

export async function loader() {
  try {
    return defer({
      products: fetchIndex(),
    });
  } catch {
    throw new Error();
  }
}
