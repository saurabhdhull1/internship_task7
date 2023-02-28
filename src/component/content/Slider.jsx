import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const details = [
    "/assets/banner1.webp",
    "/assets/banner2.webp",
    "/assets/banner3.jpg",
    "/assets/banner4.jpg",
    "/assets/banner5.jpg",
    "/assets/banner6.webp",
    "/assets/banner7.webp",
    "/assets/banner8.jpg",
    "/assets/banner9.webp",
  ];
  return (
    <Carousel >
      {details.map((i) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={i} alt="First slide" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
