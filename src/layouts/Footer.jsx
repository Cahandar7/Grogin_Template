import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const [lang] = useContext(LanguageContext);

  return (
    <footer>
      <div className="top-f">
        <div className="left">
          {lang === "EN" ? (
            <>
              <h5>Join our newsletter for £10 off</h5>
              <p>
                Register now to get the latest updates on promotions & coupons.
                Don’t worry, we won’t spam!
              </p>
            </>
          ) : (
            <>
              <h5>Bizim bülletenimizə qoşulun və £10 endirim qazanın</h5>
              <p>
                Endirimlər və kuponlarla bağlı yenilikləri əldə etmək üçün indi
                qeydiyyatdan keçin. Narahat olmayın, biz spam göndərmirik!
              </p>
            </>
          )}
        </div>
        <div className="right">
          <div className="form">
            <span>
              <i className="bi bi-envelope fs-5"></i>
              <input
                type="email"
                placeholder={
                  lang === "EN"
                    ? "Enter your email address"
                    : "E-poçt ünvanınızı daxil edin"
                }
                required
              />
            </span>
            <button type="submit">{lang === "EN" ? "SEND" : "GÖNDƏR"}</button>
          </div>
          <p>
            {lang === "EN" ? (
              <>
                By subscribing you agree to our{" "}
                <a href="#">Terms & Conditions and Privacy & Cookies Policy.</a>
              </>
            ) : (
              <>
                Abunə olmaqla bizim{" "}
                <a href="#">Şərtlərimizə və Məxfilik & Kukilər siyasətimizə</a>{" "}
                razı olursunuz.
              </>
            )}
          </p>
        </div>
      </div>
      <div className="middle-f">
        <div className="col1">
          <h6>{lang === "EN" ? "Do You Need Help?" : "Kömək Lazımdır?"}</h6>
          <p>
            {lang === "EN"
              ? "Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska."
              : "Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska."}
          </p>
          <div>
            <i className="fas fa-phone fs-2"></i>
            <div>
              <p>
                {lang === "EN"
                  ? "Monday-Friday: 08am-9pm"
                  : "Bazar ertəsi-Cümə: 08:00-21:00"}
              </p>
              <h4>0 800 300-353</h4>
            </div>
          </div>
          <div>
            <i className="bi bi-envelope fs-2"></i>
            <div>
              <p>
                {lang === "EN"
                  ? "Need help with your order?"
                  : "Sifarişinizdə kömək lazımdır?"}
              </p>
              <h6>info@example.com</h6>
            </div>
          </div>
        </div>
        <div className="col2">
          <ul>
            <h6>
              {lang === "EN" ? "Make Money with Us" : "Bizimlə Pul Qazanın"}
            </h6>
            <li>
              <a href="#">
                {lang === "EN" ? "Sell on Grogin" : "Grogin-də Satış Edin"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Sell Your Services on Grogin"
                  : "Xidmətlərinizi Grogin-də Satın"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Sell on Grogin Business"
                  : "Grogin Biznesdə Satış Edin"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Sell Your Apps on Grogin"
                  : "Tətbiqlərinizi Grogin-də Satın"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Become an Affiliate" : "Tərəfdaş Olun"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Advertise Your Products"
                  : "Məhsullarınızı Reklam Edin"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Sell-Publish with Us"
                  : "Bizimlə Satın və Nəşr Edin"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Become a Vendor" : "Satıcı Olun"}
              </a>
            </li>
          </ul>
        </div>
        <div className="col3">
          <ul>
            <h6>{lang === "EN" ? "Let Us Help You" : "Biz Sizə Kömək Edək"}</h6>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Accessibility Statement"
                  : "Əlçatanlıq Bəyanatı"}
              </a>
            </li>
            <li>
              <a href="#">{lang === "EN" ? "Your Orders" : "Sifarişləriniz"}</a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Returns & Replacements"
                  : "Qaytarma və Dəyişdirmə"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Shipping Rates & Policies"
                  : "Çatdırılma Qiymətləri və Siyasətləri"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN"
                  ? "Refund and Returns Policy"
                  : "Geri Ödəniş və Qaytarma Siyasəti"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Privacy Policy" : "Məxfilik Siyasəti"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Terms and Conditions" : "Şərtlər və Qaydalar"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Cookie Settings" : "Kuki Parametrləri"}
              </a>
            </li>
            <li>
              <a href="#">{lang === "EN" ? "Help Center" : "Yardım Mərkəzi"}</a>
            </li>
          </ul>
        </div>
        <div className="col4">
          <ul>
            <h6>
              {lang === "EN" ? "Get to Know Us" : "Bizi Daha Yaxşı Tanıyın"}
            </h6>
            <li>
              <a href="#">
                {lang === "EN" ? "Careers for Grogin" : "Grogin üçün Karyera"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "About Grogin" : "Grogin Haqqında"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Investor Relations" : "İnvestor Əlaqələri"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Grogin Devices" : "Grogin Cihazları"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Customer Reviews" : "Müştəri Rəyləri"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Social Responsibility" : "Sosial Məsuliyyət"}
              </a>
            </li>
            <li>
              <a href="#">
                {lang === "EN" ? "Store Locations" : "Mağaza Ünvanları"}
              </a>
            </li>
          </ul>
        </div>
        <div className="col5">
          <h6>
            {lang === "EN" ? "Download our app" : "Proqramımızı yükləyin"}
          </h6>
          <div>
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/google-play-button-dark.png"
              alt="Google Play"
              width="120"
              height="40"
            />
            <span>
              {lang === "EN"
                ? "Download App Get -10% Discount"
                : "Proqramı Yükləyin -10% Endirim qazanın"}
            </span>
          </div>
          <div>
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/10/apple-store-button-dark.png"
              alt="App Store"
              width="120"
              height="40"
            />
            <span>
              {lang === "EN"
                ? "Download App Get -20% Discount"
                : "Proqramı Yükləyin -20% Endirim qazanın"}
            </span>
          </div>
          <div className="soc-media">
            <p>
              {lang === "EN"
                ? "Follow us on social media:"
                : "Sosial mediada bizi izləyin:"}
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-f">
        <div className="left">
          <p>
            {lang === "EN"
              ? "Copyright 2024 © Grogin WooCommerce WordPress Theme. All rights reserved."
              : "Müəllif hüquqları 2024 © Grogin WooCommerce WordPress Teması. Bütün hüquqlar qorunur."}{" "}
            <a href="#">KLBTheme.</a>
          </p>
          <ul>
            <li>
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment.svg"
                alt="image"
              />
            </li>
            <li>
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment2.svg"
                alt="image"
              />
            </li>
            <li>
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment3.svg"
                alt="image"
              />
            </li>
            <li>
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment4.svg"
                alt="image"
              />
            </li>
            <li>
              <img
                src="https://klbtheme.com/grogin/wp-content/uploads/2025/01/payment5.svg"
                alt="image"
              />
            </li>
          </ul>
        </div>
        <div className="right">
          <a href="#">
            {lang === "EN" ? "Terms and Conditions" : "Şərtlər və Qaydalar"}
          </a>
          <a href="#">
            {lang === "EN" ? "Privacy Policy" : "Məxfilik Siyasəti"}
          </a>
          <a href="#">{lang === "EN" ? "Order Tracking" : "Sifariş İzləmə"}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
