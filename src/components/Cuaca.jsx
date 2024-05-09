import React from 'react';

function Cuaca() {
  return (
    <div className='col-md-12 col-xs-12 pad-l'>
      <div className='row'>
        <div className='col-md-3 col-xs-6'>
          <div className='form-group text-center'>
            <a
              href='https://bpbd.baliprov.go.id/cuaca-bali'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://bpbd.baliprov.go.id/images/weather.png'
                alt='bali'
              />
              <h4>Informasi Cuaca Bali</h4>
            </a>
          </div>
        </div>
        <div className='col-md-3 col-xs-6'>
          <div className='form-group text-center'>
            <a
              href='https://bpbd.baliprov.go.id/cuaca-pelabuhan'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://bpbd.baliprov.go.id/images/tsunami.png'
                alt='bali'
              />
              <h4>Informasi Cuaca Pelabuhan</h4>
            </a>
          </div>
        </div>
        <div className='col-md-3 col-xs-6'>
          <div className='form-group text-center'>
            <a
              href='https://bpbd.baliprov.go.id/cuaca-bandara'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://bpbd.baliprov.go.id/images/wind.png'
                alt='bali'
              />
              <h4>Informasi Cuaca Bandara</h4>
            </a>
          </div>
        </div>
        <div className='col-md-3 col-xs-6'>
          <div className='form-group text-center'>
            <a
              href='https://bpbd.baliprov.go.id/gempa-terkini'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://bpbd.baliprov.go.id/images/earthquake.png'
                alt='bali'
              />
              <h4>Informasi Gempa Terkini</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuaca;
