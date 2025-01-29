import React, { useContext, useEffect } from "react";
import { ValuteContext } from "../contexts/ValuteContext";
import { LanguageContext } from "../contexts/LanguageContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [valute, setValute] = useContext(ValuteContext);
  const [lang, setLang] = useContext(LanguageContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const handleCurrencyChange = (currency) => {
    setValute(currency);
  };

  const handleLanguageChange = (language) => {
    setLang(language);
  };

  const handleThemeChange = (themedl) => {
    setTheme(themedl);
    if (themedl === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header>
      <div className="top-h">
        {lang === "EN" ? (
          <div>
            <p>
              FREE delivery & 40% Discount for next 3 orders! Place your 1st
              order in.
            </p>
            <p>
              Until the end of the sale: <b>04 </b>hours<b>23 </b>minutes{" "}
              <b>45 </b>seconds
            </p>
          </div>
        ) : (
          <div>
            <p>
              Çatdirilma PULSUZ və növbəti 3 sifarişə 40% Endirim! 1-ci
              sifarişinizi verin.
            </p>
            <p>Satiş bitənə qədər:</p>
          </div>
        )}
      </div>
      <div className="middle-h">
        {lang === "EN" ? (
          <div className="left">
            <Link to={"/about"}>About Us</Link>
            <a href="">My account</a>
            <a href="">Wishlist</a>
            <span>|</span>
            <p>
              We deliver to you every day from <b>7:00 to 23:00</b>
            </p>
          </div>
        ) : (
          <div className="left">
            <Link to={"/about"}>Haqqımızda</Link>
            <a href="">Hesabım</a>
            <a href="">İstək siyahısı</a>
            <span>|</span>
            <p>
              Sizə hər gündən etibarən çatdırırıq <b>7:00-23:00</b>
            </p>
          </div>
        )}
        <div className="right">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleThemeChange("light");
                }}
              >
                🌞
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleThemeChange("dark");
                }}
              >
                🌙
              </button>
            </li>
          </ul>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {lang}
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleLanguageChange("EN");
                }}
              >
                En
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  handleLanguageChange("AZ");
                }}
              >
                Az
              </button>
            </li>
          </ul>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {valute}
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCurrencyChange("USD")}
              >
                USD
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCurrencyChange("AZN")}
              >
                AZN
              </button>
            </li>
          </ul>
          <Link to={"/cart"} className="btn btn-warning">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>
      <div className="bottom-h">
        <img
          src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png"
          alt="grogin-logo"
          width="140"
          height="35"
        />
        <span>
          <i className="bi bi-geo-alt"></i>
          {lang === "EN" ? "Deliver to all" : "Hər yerə çatdırılır"}
        </span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={
              lang === "EN"
                ? "Search for products, categories or brands..."
                : "Məhsullar, kateqoriyalar və ya brendlər axtarın..."
            }
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      {lang === "EN" ? (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={theme === "light" ? "bg-white text-dark" : "dark-bg"}
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Home" id="collapsible-nav-dropdown">
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
                <NavDropdown title="Shop" id="collapsible-nav-dropdown">
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
                <Nav.Link href="#">Fruits & Vegetables</Nav.Link>
                <Nav.Link href="#">Beverages</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Trending Products"
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
                <NavDropdown
                  title="Almost Finished"
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          collapseOnSelect
          expand="lg"
          className={theme === "light" ? "bg-white text-dark" : "dark-bg"}
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Ana səhifə" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Başqa hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nə isə</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Ayrılmış link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Mağaza" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Başqa hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nə isə</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Ayrılmış link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Meyvələr və Tərəvəzlər</Nav.Link>
                <Nav.Link href="#">İçkilər</Nav.Link>
                <Nav.Link href="#">Bloq</Nav.Link>
                <Nav.Link href="#">Əlaqə</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Populyar Məhsullar"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Başqa hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nə isə</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Ayrılmış link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Bitmək Üzrə olanlar"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Başqa hərəkət
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nə isə</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Ayrılmış link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
