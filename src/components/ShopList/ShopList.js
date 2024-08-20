import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useState } from "react";
import ErrorMessage from "../UI/ErrorMessge";
import ProductItem from "../ProductItem/ProductItem";
import Loading from "../UI/Loading";
import IconPrev from "../UI/IconPrev";
import classes from "./ShopList.module.css";

function ShopList(props) {
  const { products } = useLoaderData();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  function handleLoad() {
    setPage((state) => state + 1);
  }

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products} errorElement={<ErrorMessage />}>
        {(loadedProducts) => {
          // filter dữ liệu để hiển thị
          let data = [];
          if (props.dataFilter.type === "name") {
            data = loadedProducts.filter((product) =>
              product.name
                .toLowerCase()
                .includes(props.dataFilter.data.toLowerCase())
            );
          }
          if (props.dataFilter.type === "category") {
            if (props.dataFilter.data === "all") {
              data = loadedProducts.map((product) => product);
            } else {
              data = loadedProducts.filter(
                (product) => product.category === props.dataFilter.data
              );
            }
          }
          // check dữ liệu để hiển thị
          if (data.length === 0) {
            return (
              <p style={{ textAlign: "center" }}>
                Không tìm thấy sản phẩm phù hợp
              </p>
            );
          } else {
            // hiển thị sản phẩm đúng yêu cầu
            return (
              <>
                <ul className={classes.shopList} key={props.dataFilter.data}>
                  {data.slice(0, 9 * page).map((ele) => {
                    // hàm onClick lên từng item
                    const hanleOnClick = () => {
                      navigate(`/detail/${ele["_id"]}`);
                    };
                    return (
                      <ProductItem
                        key={ele["_id"]}
                        data={ele}
                        className={classes.animated}
                        onClick={hanleOnClick}
                      />
                    );
                  })}
                </ul>
                <div className={classes.loadMore}>
                  {/* More */}
                  <div className={classes.pagination} onClick={handleLoad}>
                    <IconPrev />
                  </div>
                </div>
              </>
            );
          }
        }}
      </Await>
    </Suspense>
  );
}

export default ShopList;
