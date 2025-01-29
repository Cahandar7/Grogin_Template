import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ValuteContext } from "../contexts/ValuteContext";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { LanguageContext } from "../contexts/LanguageContext";
import { useCart } from "react-use-cart";

function SingleCard({ title, price, image, alldata }) {
  const { addItem } = useCart();
  const [valute] = useContext(ValuteContext);
  const [lang] = useContext(LanguageContext);

  const convertedPrice = valute === "USD" ? price : (price * 1.7).toFixed(2);

  return (
    <Card style={{ width: "18rem" }} className="d-card">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        width="300"
        height="300"
        style={{ objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title.substring(0, 20)}</Card.Title>
        <Card.Text>
          {valute === "USD" ? "$" : "₼"}
          {convertedPrice}
        </Card.Text>
        <Button
          className="btn btn-primary me-1"
          onClick={() => addItem(alldata)}
        >
          {lang === "EN" ? "Add to Cart" : "Səbətə əlavə et"}
        </Button>
        <Link to={`/products/${slugify(title)}`} className="btn btn-warning">
          {lang === "EN" ? "More" : "Ətraflı"}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
