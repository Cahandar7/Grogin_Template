import React, { useContext, useEffect, useState } from "react";
import Products from "../components/Products";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import axios from "axios";
import { ProductContext } from "../contexts/ProductsContext";
import SingleCard from "../components/SingleCard";
import NotFoundProduct from "../components/NotFoundProduct";

const Main = () => {
  const data = useContext(ProductContext);

  const [activeIndex, setActiveIndex] = useState();
  const [category, setCategory] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, minPrice, maxPrice, data]);

  const applyFilters = () => {
    let filteredData = data;

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    const min_price = parseFloat(minPrice) || priceRange || 0;
    const max_price = parseFloat(maxPrice) || Infinity;

    filteredData = filteredData.filter(
      (item) => item.price >= min_price && item.price <= max_price
    );

    setFilterData(filteredData.length > 0 ? filteredData : null);
  };

  const categoryClick = (index, cat) => {
    setActiveIndex(index);
    setSelectedCategory(cat);
  };

  return (
    <Container className="main-content">
      <Row className="g-5">
        <Col sm={12} md={3}>
          <div className="price-filter">
            <h6>Widget price filter</h6>
            <div className="inputs">
              <div>
                <p>Min price</p>
                <input
                  type="number"
                  className="min-price"
                  placeholder="..."
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div>
                <p>Max price</p>
                <input
                  type="number"
                  className="max-price"
                  placeholder="..."
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <input
              type="range"
              className="price-range"
              onChange={(e) => setPriceRange(e.target.value)}
            />

            <div className="bottom-div">
              <p>Price: {priceRange}</p>
              <button onClick={applyFilters}>Filter</button>
            </div>
          </div>
          <ul className="list-group">
            <li
              className={`list-group-item ${
                activeIndex === "All" ? "active" : ""
              }`}
              onClick={() => {
                categoryClick("All", "All");
              }}
            >
              All
            </li>
            {category.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => categoryClick(index, item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={9}>
          <main>
            <div className="banner">
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/banner-33.jpg"
                alt="Grocery store with different treasures "
              />
              <div className="banner-text">
                <span>Only this week</span>
                <h3>Grocery store with different treasures</h3>
                <p>
                  We have prepared special discounts for you on grocery
                  products...
                </p>
                <button>Shop now →</button>
              </div>
            </div>
            <div className="sort-line">
              <p>Showing 1-40 of 159 results</p>
              <div className="sort-by">
                <p>Sort:</p>
                <NavDropdown
                  title="Sort by latest"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="sort-by">
                <p>Show:</p>
                <NavDropdown title="40 items" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <Container style={{ width: "1050px" }}>
              <Row>
                {filterData === null ? (
                  <NotFoundProduct />
                ) : filterData === "All" ? (
                  <Products />
                ) : (
                  filterData.map((item, index) => (
                    <Col key={index} sm={12} md={4} className="mb-4">
                      <SingleCard
                        title={item.title}
                        price={item.price}
                        image={item.images[0]}
                        alldata={item}
                      />
                    </Col>
                  ))
                )}
              </Row>
            </Container>
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
