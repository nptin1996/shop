import { useLoaderData, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { formatPrice } from "../../function";
import classes from "./OrderTable.module.css";
import ArrowRight from "../UI/ArrowRight";
import Header from "../Header/Header";
function OrderTable() {
  const orders = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <Header title="HISTORY" />
      <div className={classes.ortherContainer}>
        <Table responsive className={classes.tableOrder}>
          <thead>
            <tr>
              <th className={classes.hidden}>ID ORDER</th>
              <th className={classes.hidden}>ID USER</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>TOTAL</th>
              <th>DELIVERY</th>
              <th>STATUS</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td className={classes.hidden}>{order._id}</td>
                  <td className={classes.hidden}>{order.user}</td>
                  <td>{order.info.name}</td>
                  <td>{order.info.phone}</td>
                  <td>{order.info.address}</td>
                  <td>{formatPrice(order.total)}</td>
                  <td>{order.delivery}</td>
                  <td>{order.status}</td>
                  <td>
                    <div
                      className={classes.view}
                      onClick={() => navigate(`${order._id}`)}
                    >
                      View <ArrowRight />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default OrderTable;
