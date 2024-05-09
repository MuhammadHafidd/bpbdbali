import React from 'react';

const Footer = () => {
  return (
    <footer className='footer' style={{padding: '30px 0'}}>
      <div className='footer-main text-center' style={{background: '#1c1c1c'}}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 text-bottom' style={{bottom: 0}}>
              &nbsp;
              <br />
              <br />
              <br />
              <img
                src='https://bpbd.baliprov.go.id/images/YbsaNm7LeW4IVt7y1BRJ.png'
                alt='BPBD Logo'
                style={{
                  width: 'auto',
                  textAlign: 'bottom',
                  display: 'inline',
                }}
              />
              <h4 style={{color: '#fff'}}>
                Badan Penanggulangan Bencana Daerah (BPBD) Prov. BALI
              </h4>
            </div>
            <div className='col-md-4 text-left'>
              <h3 className='widget-title' style={{textAlign: 'center'}}>
                Alamat
              </h3>
              <p>
                <i className='fa fa-home'></i> Jalan D.I Panjaitan No. 6 Renon -
                Denpasar 80235
              </p>
              <p>
                <i className='fa fa-phone'></i> Telp. 0361 - 245397
              </p>
              <p>
                <i className='fa fa-fax'></i> Fax. 0361 - 245395
              </p>
              <p>
                <i className='fa fa-envelope-o'></i> bpbd@baliprov.go.id
              </p>
              <p>
                <i className='fa fa-world'></i> Website : bpbd.baliprov.go.id
              </p>
            </div>
            <div>
              <h3 className='widget-title'>Media Sosial</h3>
              <ul className='unstyled footer-social'>
                <li>
                  <a
                    title='Facebook'
                    href='https://www.facebook.com/bpbdbali'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='social-icon'>
                      <i className='fab fa-facebook-square'></i>
                    </span>
                  </a>
                  <a
                    title='Instagram'
                    href='https://www.instagram.com/bpbd.bali/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='social-icon'>
                      <i className='fa fa-instagram'></i>
                    </span>
                  </a>
                  <a
                    title='Twitter'
                    href='https://twitter.com/pusdalops_bali?lang=en'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='social-icon'>
                      <i className='fa fa-twitter' aria-hidden='true'></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
