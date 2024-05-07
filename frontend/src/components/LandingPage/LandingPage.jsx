import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carosel1 from "/carousel/carousal1.png";
import carosel2 from "/carousel/carousal2.png";
import carosel3 from "/carousel/carousal3.png";
import carosel4 from "/carousel/carousal4.png";
import UpcomingEvents from './upcomingevents/UpcomingEvents'
import Products from './Products/Products'
import Blogs from './blogs/Blogs'
import Footer from '../footer/footer';


function LandingPage() {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  const eventData = [
    {
      "id": 1,
      "title": "Lakshmi Ganapathi Homa",
      "description": "Durga Puja is estimated to be celebrated in over 30 countries at present. Durga Puja has come a long way (quite literally) since the first-ever barowari puja in Hooghly's Guptipara in 1790, with Bengal's favourite festival becoming a truly international affair in the third decade of the 21st century.",
      "date": "2024-03-01",
      "time": "Chaviti",
      "image": "https://www.dharmasamsthan.com/images/event/16877943251344.png"
    },
    {
      "id": 2,
      "title": "Lakshmi Ganapathi Homa",
      "description": "Durga Puja is estimated to be celebrated in over 30 countries at present. Durga Puja has come a long way (quite literally) since the first-ever barowari puja in Hooghly's Guptipara in 1790, with Bengal's favourite festival becoming a truly international affair in the third decade of the 21st century.",
      "date": "2024-03-02",
      "time": "Chaviti",
      "image": "https://www.dharmasamsthan.com/images/event/16877943251344.png"
    },
    {
      "id": 3,
      "title": "Lakshmi Ganapathi Homa",
      "description": "Durga Puja is estimated to be celebrated in over 30 countries at present. Durga Puja has come a long way (quite literally) since the first-ever barowari puja in Hooghly's Guptipara in 1790, with Bengal's favourite festival becoming a truly international affair in the third decade of the 21st century.",
      "date": "2024-03-03",
      "time": "Chaviti",
      "image": "https://www.dharmasamsthan.com/images/event/16877943251344.png"
    },
    {
      "id": 4,
      "title": "Lakshmi Ganapathi Homa",
      "description": "Durga Puja is estimated to be celebrated in over 30 countries at present. Durga Puja has come a long way (quite literally) since the first-ever barowari puja in Hooghly's Guptipara in 1790, with Bengal's favourite festival becoming a truly international affair in the third decade of the 21st century.",
      "date": "2024-03-04",
      "time": "Chaviti",
      "image": "https://www.dharmasamsthan.com/images/event/16877943251344.png"
    },
  ]



  return (
    <>
      {/*  Carousel section start */}
      <div className='CarousalMainContainer'>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <img className='carouselimg' src={carosel1} alt="carousel1 Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='carouselimg' src={carosel2} alt="carousel2 Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='carouselimg' src={carosel3} alt="carousel3 Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='carouselimg' src={carosel4} alt="carousel4 Image" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/*  Carousel section end */}

      {/*  Events section start */}
      <div>
        <h1 className='EventsHeading'>EVENTS</h1>
        <hr />
      </div>
      <div className='EventsContainer'>
        {eventData.map((item) => (
          <div className="eventcontainer" key={item.id}>
            <div className="post">
              <div className="header_post">
                <img src="https://www.dharmasamsthan.com/images/event/16877943251344.png" alt="" />
              </div>

              <div className="body_post">
                <div className="post_content">
                  <h1 className='text-uppercase'>{item.title}</h1>
                  <p className='EventDescription'>{item.description}</p>

                  <div className="container_infos">
                    
                    <div className="postedBy">
                    <span className='text-uppercase'>{item.time}</span>
                      <span className='text-uppercase'>{item.date}</span>
                    </div>

                    <div className="container_tags">
                      <div className="tags">
                        <span>Read More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  Events section end */}

      <UpcomingEvents/>
      <Products/>
      <Blogs/>
      <Footer/>
    </>
  );
}

export default LandingPage;
