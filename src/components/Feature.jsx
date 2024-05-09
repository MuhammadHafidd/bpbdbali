/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Feature() {
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
    <section className='featured-post-area no-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-xs-12 pad-r'>
            <Slider {...settings}>
              <div>
                <img
                  src='https://bpbd.baliprov.go.id/uploads/slider/asn-berakhlak-bangga-melayani-bangsa-2306202203115641310.png'
                  style={{width: '100%', height: 'auto', maxHeight: '350px'}}
                  alt='ASN Berakhlak Bangga Melayani Bangsa'
                />
              </div>
              <div>
                <img
                  src='https://bpbd.baliprov.go.id/uploads/slider/sosialisasi-bali-anti-korupsi-1604202410294843138.jpeg'
                  style={{width: '100%', height: 'auto', maxHeight: '350px'}}
                  alt='Sosialisasi Bali Anti Korupsi'
                />
              </div>
            </Slider>
          </div>

          <section className='block-wrapper cuacaExtream'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12' style={{marginBottom: '10px'}}>
                  <div className='block color-red'>
                    <a href='/'>
                      <h3 className='block-title'>
                        <span>Peringatan Dini Cuaca Extrem</span>
                      </h3>
                    </a>
                    <marquee
                      behavior='scroll'
                      direction='left'
                      style={{marginTop: '-10px'}}
                      scrollamount='10'
                    >
                      <h4>
                        Berlaku selama 24 jam (21 Desember 2022, 08.00 Wita - 22
                        Desember 2022, 08.00 Wita) Waspada potensi hujan yang
                        dapat disertai petir/kilat dan angin kencang berdurasi
                        singkat di sebagian besar wilayah Bali serta tinggi
                        gelombang laut yang dapat mencapai 2.0 meter atau lebih
                        di Selat Bali bagian selatan, Selat Badung, Selat Lombok
                        bagian selatan, Perairan Selatan Bali dan Samudra Hindia
                        Selatan Bali.
                      </h4>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Feature;
