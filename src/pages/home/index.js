import { Product } from "components";

const data = [
  {
    name: "کابرن",
    address: "گرگان، شهید رجایی",
    surfaceType: "چمن مصنوعی",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc: "http://varzesh.gorgan.ir/uploads/posts/2019-05/1558598741_1.jpg",
  },
  {
    name: "قابوس",
    address: "گرگان، شهرک امام",
    surfaceType: "سالن",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc:
      "http://varzesh.gorgan.ir/uploads/posts/2019-05/thumbs/1558595162_20.jpg",
  },
  {
    name: "آزادی شماره دو",
    address: "گرگان، پاسداران",
    surfaceType: "چمن مصنوعی",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc: "http://varzesh.gorgan.ir/uploads/posts/2019-05/1558598741_1.jpg",
  },
  {
    name: "1کابرن",
    address: "گرگان، شهید رجایی",
    surfaceType: "چمن مصنوعی",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc: "http://varzesh.gorgan.ir/uploads/posts/2019-05/1558598741_1.jpg",
  },
  {
    name: "1قابوس",
    address: "گرگان، شهرک امام",
    surfaceType: "سالن",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc:
      "http://varzesh.gorgan.ir/uploads/posts/2019-05/thumbs/1558595162_20.jpg",
  },
  {
    name: "1آزادی شماره دو",
    address: "گرگان، پاسداران",
    surfaceType: "چمن مصنوعی",
    priceFrom: "۲۵۰,۰۰۰",
    imageSrc: "http://varzesh.gorgan.ir/uploads/posts/2019-05/1558598741_1.jpg",
  },
];

const Home = () => {
  return (
    <div className="container overflow-y-auto">
      {data.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          address={product.address}
          surfaceType={product.surfaceType}
          price={product.priceFrom}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
};

export default Home;
