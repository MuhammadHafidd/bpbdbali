import React from 'react';

function TopFooter({artikel}) {
  const footerStyle = {
    background: '#f5f5f5',
    marginTop: '-100px',
  };

  const postItemStyle = {
    marginBottom: '20px',
    maxHeight: 'none',
    borderBottom: '1px solid #000',
    paddingBottom: '15px',
  };

  return (
    <footer id='footer' className='footer' style={footerStyle}>
      <div className='footer-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 m-0 col-sm-12 footer-widget widget-categories'>
              <h3 className='block-title'>
                <span>Selamat Datang</span>
              </h3>
              <img
                src='https://bpbd.baliprov.go.id/assets/images/ketua.jpg'
                className='img-responsive'
                width='200'
                style={{textAlign: 'center', margin: '0 auto'}}
                alt='Chairman'
              />
              <p className='text-center' style={{color: 'red'}}>
                <b>Dr. Drs. I MADE RENTIN, AP., M.Si.</b>
              </p>
              <p className='text-center' style={{color: 'orange'}}>
                Kepala Pelaksana Badan Penanggulangan Bencana Daerah Provinsi
                Bali
              </p>
              <p className='text-justify more'>
                Salam Tangguh !!! Selamat datang di website Badan Penanggulangan
                Bencana Daerah (BPBD) Provinsi Bali. BPBD Provinsi Bali mengampu
                misi ke-19 dari Visi dan Misi Gubernur Bali yaitu mengembangkan
                sistem keamanan terpadu yang ditopang dengan sumber daya manusia
                serta sarana prasarana yang memadai untuk menjaga keamanan
                daerah dan krama Bali serta keamanan para wisatawan...
              </p>
            </div>

            {/* Popular News Widget */}
            <div className='col-md-4 m-0 col-sm-12 footer-widget twitter-widget'>
              <div className='widget color-default'>
                <h3 className='block-title'>
                  <span>Berita Populer</span>
                </h3>
                <ul className='list-post'>
                  {artikel.map((post, index) => (
                    <li key={index} className='clearfix' style={postItemStyle}>
                      <div className='post-block-style post-float clearfix'>
                        <div className='post-thumb'>
                          <a href={post.articleUrl}>
                            <img
                              className='img-responsive'
                              src={post.imageUrl}
                              alt=''
                            />
                          </a>
                          <a className='post-cat' href='/'>
                            {post.category}
                          </a>
                        </div>
                        <div className='post-content'>
                          <h2 className='post-title title-small'>
                            <a href={post.articleUrl}>{post.title}</a>
                          </h2>
                          <div className='post-meta'>
                            <span className='post-date'>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Artikel Widget */}
            <div className='col-md-4 m-0 col-sm-12 footer-widget twitter-widget'>
              <div className='widget color-default'>
                <h3 className='block-title'>
                  <span>Artikel</span>
                </h3>
                <ul className='list-post'>
                  {artikel.map((post, index) => (
                    <li key={index} className='clearfix' style={postItemStyle}>
                      <div className='post-block-style post-float clearfix'>
                        <div className='post-thumb'>
                          <a href={post.articleUrl}>
                            <img
                              className='img-responsive'
                              src={post.imageUrl}
                              alt=''
                            />
                          </a>
                          <a className='post-cat' href='/'>
                            {post.category}
                          </a>
                        </div>
                        <div className='post-content'>
                          <h2 className='post-title title-small'>
                            <a href={post.articleUrl}>{post.title}</a>
                          </h2>
                          <div className='post-meta'>
                            <span className='post-date'>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TopFooter;
