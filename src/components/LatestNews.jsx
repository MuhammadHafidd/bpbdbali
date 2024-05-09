import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LatestNews({newsItems}) {
  const latestNewsStyle = {marginTop: '-100px'};
  const postCatStyle = {position: 'inherit', top: 0, left: 0};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className='latest-news block color-red' style={latestNewsStyle}>
      <h3 className='block-title'>
        <span>Berita Terupdate</span>
      </h3>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className='item'>
            <div className='post-block-style clearfix'>
              <a
                href={item.categoryUrl}
                className='post-cat'
                style={postCatStyle}
              >
                {item.category}
              </a>
              <div className='post-thumb'>
                <a href={item.articleUrl}>
                  <img className='img-responsive' src={item.imageUrl} alt='' />
                </a>
              </div>
              <div className='post-content'>
                <h2 className='post-title title-medium'>
                  <a href={item.articleUrl}>{item.title}</a>
                </h2>
                <div className='post-meta'>
                  <span className='post-date'>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestNews;
