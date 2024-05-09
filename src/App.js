// src/App.js or src/App.tsx
import React from 'react';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Main from './components/Main';
import Feature from './components/Feature';
import Content from './components/Content';
import TopFooter from './components/TopFooter';
import Footer from './components/Footer';

function App() {
  const artikel = [
    {
      title: 'Potensi Ancaman Bencana...',
      date: 'Mar 19, 2018',
      category: 'Pengetahuan Kebencanaan',
      imageUrl: 'https://bpbd.baliprov.go.id/images/beue6U4CUAqLWY0Ahx4M.jpg',
      articleUrl:
        'https://bpbd.baliprov.go.id/article/135/potensi-ancaman-bencana',
    },
    {
      title: 'Pelayanan Vaksinasi Covid-19 di Wantilan DPRD Prov...',
      date: 'Jul 16, 2021',
      category: 'Berita',
      imageUrl: 'https://bpbd.baliprov.go.id/images/hwLqfpv0oLUvPrdqRsbZ.jpg',
      articleUrl:
        'https://bpbd.baliprov.go.id/article/2487/pelayanan-vaksinasi-covid-19-di-wantilan-dprd-provinsi-bali-dan-gedung-nari-graha-provinsi-bali',
    },
  ];

  return (
    <div className='body-inner'>
      <TopBar />
      <Header />
      <Main />
      <Feature />
      <Content />
      <TopFooter artikel={artikel} />
      <Footer />
    </div>
  );
}

export default App;
