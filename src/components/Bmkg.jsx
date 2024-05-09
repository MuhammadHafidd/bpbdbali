import React from 'react';

function Bmkg() {
  const panelStyle = {borderColor: '#fdac05'};
  const panelTitleStyle = {color: '#ff8d00', textAlign: 'center'};

  return (
    <section className='block-wrapper cuacaToday'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8' style={{marginBottom: '25px'}}>
            <div className='block color-red'>
              <a href='/'>
                <h3 className='block-title'>
                  <span>Gempa Terbaru Dirasakan</span>
                </h3>
              </a>
            </div>
            <div className='row'>
              <div className='col-md-6 gempa'>
                <div className='panel panel-warning' style={panelStyle}>
                  <div className='panel-header'>
                    <h3 className='panel-title' style={panelTitleStyle}>
                      Gempa Bumi M &gt; 5.0
                    </h3>
                  </div>
                  <div className='panel-body gempabumi-detail'>
                    <h3 className='text-center'>08 Mei 2024, 05:09:55 WIB</h3>
                    <ul className='list-unstyled'>
                      <li>
                        <span className='ic magnitude'></span>
                        <b>5.2</b>
                      </li>
                      <li>
                        <span className='ic kedalaman'></span>
                        <b>78 km</b>
                      </li>
                      <li>
                        <span className='ic koordinat'></span>
                        <b>9.51 LS - 115.84 BT</b>
                      </li>
                      <li className='bl'>
                        <span className='ic lokasi np'></span>
                        <b>97 km BaratDaya LOMBOKBARAT-NTB</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-6 gempa'>
                <div className='panel panel-warning' style={panelStyle}>
                  <div className='panel-header'>
                    <h3 className='panel-title' style={panelTitleStyle}>
                      Gempa Bumi Dirasakan
                    </h3>
                  </div>
                  <div className='panel-body gempabumi-detail'>
                    <h3 className='text-center'>09 Mei 2024</h3>
                    <ul className='list-unstyled'>
                      <li>
                        <span className='ic magnitude'></span>
                        <b>3.5</b>
                      </li>
                      <li>
                        <span className='ic kedalaman'></span>
                        <b>10 km</b>
                      </li>
                      <li>
                        <span className='ic koordinat'></span>
                        <b></b>
                      </li>
                      <li className='bl'>
                        <span className='ic lokasi np'></span>
                        <b>II-III Sorowako</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <u>
                <em>Sumber : BMKG</em>
              </u>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bmkg;
