import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ProductDescription from "../ProductDescription/ProductDescription";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import Loading from "../UI/Loading";
import ErrorMessage from "../UI/ErrorMessge";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { product } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <div className={classes.layoutFail}>
            <Loading />
          </div>
        }
      >
        <Await
          resolve={product}
          errorElement={<ErrorMessage message="Không thể tải sản phẩm này." />}
        >
          {(loadedProduct) => {
            return (
              <div className={classes.layout}>
                <ProductDescription data={loadedProduct} />
                <RelatedProducts
                  data={loadedProduct.longDesc}
                  relatedList={loadedProduct.related}
                />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default ProductDetail;
