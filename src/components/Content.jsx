import React from 'react';
import Cuaca from './Cuaca';
import Bmkg from './Bmkg';
import LatestNews from './LatestNews';
import SiteLinks from './SiteLinks';

function Content() {
  const newsItems = [
    {
      category: 'Berita',
      categoryUrl: 'https://bpbd.baliprov.go.id/v/37/berita',
      articleUrl:
        'https://bpbd.baliprov.go.id/article/3346/pelatihan-pencegahan-dan-mitigasi-bencana-tahun-2024',
      imageUrl: 'https://bpbd.baliprov.go.id/images/rUj9r9m2VxSE9AZ5ea8n.jpg',
      title: 'PELATIHAN PENCEGAHAN DAN MITIGASI BENCANA TAHUN 2024...',
      date: 'May 9, 2024',
    },
    {
      category: 'Berita',
      categoryUrl: 'https://bpbd.baliprov.go.id/v/37/berita',
      articleUrl:
        'https://bpbd.baliprov.go.id/article/3345/tpa-suwung-kembali-terbakar',
      imageUrl: 'https://bpbd.baliprov.go.id/images/bAnlPgdwQNoY9bc4BOS4.png',
      title: 'TPA SUWUNG KEMBALI TERBAKAR...',
      date: 'May 9, 2024',
    },
    {
      category: 'Berita',
      categoryUrl: 'https://bpbd.baliprov.go.id/v/37/berita',
      articleUrl:
        'https://bpbd.baliprov.go.id/article/3344/pentingnya-sinergitas-dalam-penanggulangan-bencana',
      imageUrl: 'https://bpbd.baliprov.go.id/images/LhljyLuTNnFLJTpke2kL.png',
      title: 'PENTINGNYA SINERGITAS DALAM PENANGGULANGAN BENCANA...',
      date: 'May 9, 2024',
    },
  ];

  const sites = [
    {
      url: 'http://badungkab.go.id/instansi/bpbd/',
      title: 'BPBD Kab. Badung',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/badung.jpg',
    },
    {
      url: 'http://www.baliprov.go.id/',
      title: 'Provinsi Bali',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/logobali.png',
    },
    {
      url: 'http://bpbd.banglikab.go.id/',
      title: 'BPBD Kab. Bangli',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/bangli.jpg',
    },
    {
      url: 'https://bpbd.bulelengkab.go.id/',
      title: 'BPBD Kab. Buleleng',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/buleleng.jpg',
    },
    {
      url: 'http://penanggulanganbencana.denpasarkota.go.id/',
      title: 'BPBD Kota Denpasar',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/denpasar.jpg',
    },
    {
      url: 'http://jembranakab.go.id/',
      title: 'BPBD Kab. Jembrana',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/jembrana.jpg',
    },
    {
      url: 'http://karangasemkab.go.id',
      title: 'BPBD Kab. Karangasem',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/karangasem.jpg',
    },
    {
      url: 'http://www.bpbd.klungkungkab.go.id/',
      title: 'BPBD Kab. Klungkung',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/klungkung1.gif',
    },
    {
      url: 'https://www.tabanankab.go.id',
      title: 'BPBD Kab. Tabanan',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/tabanan.jpg',
    },
    {
      url: 'http://www.pmibali.or.id/',
      title: 'PMI Bali',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/ddI.png',
    },
    {
      url: 'https://www.bnpb.go.id/',
      title: 'BNPB Pusat',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/images1.png',
    },
    {
      url: 'http://basarnas.go.id/',
      title: 'Badan SAR Nasional',
      imgSrc: 'https://bpbd.baliprov.go.id/assets/images/Logobsnbsr.gif',
    },
  ];

  return (
    <section className='block-wrapper' style={{marginTop: '-20px'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
            <Cuaca />

            <div className='gap-30'></div>

            <Bmkg />

            <LatestNews newsItems={newsItems} />

            <SiteLinks sites={sites} />
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <div className='sidebar sidebar-right'>
              <div
                className='widget color-default'
                style={{marginTop: '-30px'}}
              >
                <div className='list-post-block'>
                  <a
                    href='http://lapor.go.id'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='https://bpbd.baliprov.go.id/assets/images/lapor.jpg'
                      alt='bali'
                    />
                  </a>
                </div>
                <div className='list-post-block'>
                  <a
                    href='http://siki.baliprov.go.id/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='https://bpbd.baliprov.go.id/assets/images/siki.png'
                      alt='bali'
                    />
                  </a>
                </div>
                <div className='list-post-block'>
                  <a
                    href='https://ppid.baliprov.go.id/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='https://bpbd.baliprov.go.id/assets/images/ppid.jpg'
                      alt='bali'
                    />
                  </a>
                </div>
                <div className='list-post-block'>
                  <a
                    href='https://mhews.bmkg.go.id/bali-forecast'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='https://bpbd.baliprov.go.id/assets/images/mhews.jpg'
                      alt='bali'
                    />
                  </a>
                </div>
              </div>

              <div className='widget color-default'>
                <h3 className='block-title'>
                  <span>PETA KRB</span>
                </h3>
                <div className='list-post-block'>
                  <img
                    src='https://bpbd.baliprov.go.id/images/KRB_Agung.jpg'
                    alt='bali'
                  />
                </div>
              </div>

              <div className='widget color-default'>
                <h3 className='block-title'>
                  <span>SIAGA LETUSAN GUNUNG AGUNG</span>
                </h3>
                <div className='list-post-block'>
                  <img
                    src='https://bpbd.baliprov.go.id/images/siaga_gunung_agung.jpeg'
                    alt='bali'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
