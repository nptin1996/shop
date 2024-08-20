import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useRef } from "react";
import { useDispatch } from "react-redux";
import { pickedActions } from "../../store/picked.js";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./HomeList.module.css";
import Title from "../Title/Title";
import Popup from "../Popup.js/Popup";
import Loading from "../UI/Loading";
import ErrorMessage from "../UI/ErrorMessge.js";

function HomeList() {
  const { products } = useLoaderData();
  const ref = useRef();
  const dispatch = useDispatch();

  return (
    <div className={classes.productsList}>
      <Title text1="MADE THE HARD WAY" text2="TOP TRENDING PRODUCTS" />
      <Suspense fallback={<Loading />}>
        <Await resolve={products} errorElement={<ErrorMessage />}>
          {(loadedProducts) => {
            return (
              <ul className={classes.listItem}>
                {loadedProducts.map((product) => {
                  // hàm onClick cho từng product
                  const hanleOnClick = () => {
                    dispatch(pickedActions.pickProduct(product));
                    ref.current.open();
                  };
                  return (
                    <ProductItem
                      key={product._id}
                      data={product}
                      onClick={hanleOnClick}
                    />
                  );
                })}
              </ul>
            );
          }}
        </Await>
      </Suspense>
      <Popup ref={ref} />
    </div>
  );
}

export default HomeList;
