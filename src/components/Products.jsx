import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import SingleCard from "./SingleCard";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../contexts/ProductsContext";

const Products = () => {
  const data = useContext(ProductContext);

  return (
    <Container>
      <Row>
        {data.length === 0 ? (
          <Col className="text-center">
            <SyncLoader color="#000000" loading margin={3} size={20} />
          </Col>
        ) : (
          data.map((product) => (
            <Col key={product.id} sm={12} md={4} className="mb-4">
              <SingleCard
                title={product.title}
                price={product.price}
                image={product.images[0]}
                alldata={product}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
