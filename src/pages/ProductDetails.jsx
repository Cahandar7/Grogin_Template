import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductsContext";
import { SyncLoader } from "react-spinners";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ValuteContext } from "../contexts/ValuteContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  const { addItem } = useCart();

  const [valute] = useContext(ValuteContext);
  const [lang] = useContext(LanguageContext);
  const data = useContext(ProductContext);
  const { slug } = useParams();

  const selectedProd = data?.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") ===
      slug.toLowerCase().replace(/\s+/g, "-")
  );

  return (
    <Container className="product-details-container">
      <Row className="justify-content-center">
        {!selectedProd ? (
          <Col>
            <SyncLoader color="#000000" loading margin={3} size={20} />
          </Col>
        ) : (
          <Col>
            <Card
              style={{ width: "20rem", margin: "50px 0" }}
              className="d-card"
            >
              <Card.Img
                variant="top"
                src={selectedProd.images[0]}
                alt={selectedProd.title}
              />
              <Card.Body>
                <Card.Title>{selectedProd.title.substring(0, 25)}</Card.Title>
                <Card.Text>{selectedProd.description}</Card.Text>
                <Card.Text>
                  {valute === "USD" ? "$" : "₼"}
                  {valute === "USD"
                    ? selectedProd.price
                    : (selectedProd.price * 1.7).toFixed(2)}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    addItem(selectedProd);
                  }}
                >
                  {lang === "EN" ? "Add to Cart" : "Səbətə əlavə et"}
                </Button>
                <Link to={"/"} className="btn btn-dark ms-1">
                  Back
                </Link>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetails;
