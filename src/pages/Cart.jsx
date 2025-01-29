import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) {
    return (
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: "30vh" }}
      >
        <p className="h1 mb-5">Your cart is empty</p>
        <Link to={"/"} className="btn btn-dark">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ minHeight: "70vh" }}
    >
      <h1>Cart</h1>

      <Col sm={12} md={9}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={item.images[0]} alt={item.title} width="70" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Col>

      <Link to={"/"} className="btn btn-dark">
        Back
      </Link>
    </div>
  );
};

export default Cart;
