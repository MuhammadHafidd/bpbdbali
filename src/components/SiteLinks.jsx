import React from 'react';

const SiteLinks = ({sites}) => {
  return (
    <section className='block-wrapper cuacaToday'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8' style={{marginBottom: '25px'}}>
            <div className='block color-red'>
              <a href='/'>
                <h3 className='block-title'>
                  <span>Situs Terkait</span>
                </h3>
              </a>
            </div>
            <div className='row'>
              {sites.map((site, index) => (
                <div
                  key={index}
                  className='col-md-2 col-xs-3'
                  style={{marginTop: index >= 6 ? '20px' : '0px'}}
                >
                  <a
                    href={site.url}
                    target='_blank'
                    title={site.title}
                    rel='noopener noreferrer'
                  >
                    <img
                      src={site.imgSrc}
                      className='img-responsive'
                      alt={site.title}
                      style={{width: '50px', height: '50px'}}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteLinks;
