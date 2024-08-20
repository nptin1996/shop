import { useLoaderData } from "react-router-dom";
import { formatPrice, getUrl } from "../../function";
import Table from "react-bootstrap/Table";
import classes from "./OrderDetail.module.css";

function OrderDetail() {
  const order = useLoaderData();
  // message: "Invalid product.";
  const items = order.items.filter((item) => item.product !== null);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h2>INFORMATION ORDER</h2>
        <p>ID User: {order.user}</p>
        <p>Full Name: {order.info.name}</p>
        <p>Phone: {order.info.phone}</p>
        <p>Address: {order.info.address}</p>
        <p>Total: {formatPrice(order.total)}</p>
      </div>
      <Table responsive className={classes.table}>
        <thead>
          <tr>
            <th className={classes.hidden}>ID PRODUCT</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.product._id}>
                <td className={classes.hidden}>{item.product._id}</td>
                <td>
                  <img
                    src={getUrl(item.product.images[0])}
                    alt={item.product.name}
                    crossOrigin="anonymous"
                  />
                </td>
                <td className={classes.name}>{item.product.name}</td>
                <td>{formatPrice(item.product.price)}</td>
                <td>{item.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default OrderDetail;
