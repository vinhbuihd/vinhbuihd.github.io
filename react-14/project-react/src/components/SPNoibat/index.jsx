import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./SPNoiBat.css";

let products = [
  {
    id: 1,
    name: "Caramel latte",
    alt: "caramel-latte",
    image: "./images/sp-1-caramel-latte.jpg",
    price: {
      S: 30000,
      M: 35000,
      L: 40000,
    },
    type: "coffee",
    quantity: 1,
    star: 5,
    status: "new",
  },
  {
    id: 2,
    name: "Cà phê mocha",
    alt: "mocha-nong",
    image: "./images/sp-2-cafe-mocha-nong.jpg",
    price: {
      S: 45000,
      M: 50000,
      L: 55000,
    },
    type: "coffee",
    quantity: 1,
    star: 4,
    status: "new",
  },
  {
    id: 3,
    name: "Macchiato",
    alt: "epresso-macchiato",
    image: "./images/sp-3-epresso-macchiato.jpg",
    price: {
      S: 35000,
      M: 40000,
      L: 45000,
    },
    type: "coffee",
    quantity: 1,
    star: 5,
    status: "special",
  },
  {
    id: 4,
    name: "americano",
    alt: "americano",
    image: "./images/sp-4-americano.jpg",
    price: {
      S: 40000,
      M: 45000,
      L: 50000,
    },
    type: "coffee",
    quantity: 1,
    star: 4,
    status: "special",
  },
  {
    id: 5,
    name: "mocha socola",
    alt: "mocha-socola",
    image: "./images/sp-5-mocha-socola.jpg",
    price: {
      S: 50000,
      M: 55000,
      L: 60000,
    },
    type: "coffee",
    quantity: 1,
    star: 5,
    status: "selling",
  },
  {
    id: 6,
    name: "mocha caramel",
    alt: "caramel-Mocha",
    image: "./images/sp-6.jpg",
    price: {
      S: 50000,
      M: 55000,
      L: 60000,
    },
    type: "coffee",
    quantity: 1,
    star: 4,
    status: "new",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SPNoiBat = () => {
  return (
    <section className="product-highlight padding-60">
      <div className="container">
        <h2 className="h2-heading">Sản phẩm nổi bật</h2>
        <div className="lineBorder text-center mt-4 mb-4">
          <img src="./images/line-under-heading.png" alt="line" />
        </div>

        <div className="highlight-product">
          <Carousel
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            // customTransition="ease .75s"
            transitionDuration={500}
            itemClass="carouselItem"
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Carousel>
        </div>
        <div className="text-center mt-3">
          <Link to="/menu">
            <Button title="Xem tất cả menu" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SPNoiBat;
