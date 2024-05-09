import React from 'react';

function Main() {
  return (
    <div className='main-nav clearfix'>
      <div className='container'>
        <div className='row'>
          <nav className='site-navigation navigation'>
            <div className='site-nav-inner pull-left'>
              <button
                type='button'
                className='navbar-toggle'
                data-toggle='collapse'
                data-target='.navbar-collapse'
              >
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>

              <div className='collapse navbar-collapse navbar-responsive-collapse'>
                {/* Example of using JavaScript comments */}
                <ul className='nav navbar-nav'>
                  <li>
                    <a href='https://bpbd.baliprov.go.id'>Home</a>
                  </li>

                  <li>
                    <a href='https://bpbd.baliprov.go.id/v/37/berita'>Berita</a>
                  </li>

                  <li>
                    <a href='https://bpbd.baliprov.go.id/v/46/sertifikasi'>
                      SERTIFIKASI
                    </a>
                  </li>

                  <li className='dropdown'>
                    <a
                      href='/'
                      className='dropdown-toggle'
                      data-toggle='dropdown'
                      role='button'
                      aria-haspopup='true'
                      aria-expanded='true'
                    >
                      Profile <i className='fa fa-angle-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li>
                        <a href='https://bpbd.baliprov.go.id/v/63/sejarah'>
                          Sejarah
                        </a>
                      </li>
                      <li>
                        <a href='https://bpbd.baliprov.go.id/v/64/visi-misi'>
                          Visi &amp; Misi
                        </a>
                      </li>
                      <li>
                        <a href='https://bpbd.baliprov.go.id/v/100/moto-jenis-pelayanan-dan-maklumat-pelayanan'>
                          Moto, Jenis Pelayanan, dan Maklumat Pelayanan
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className='dropdown'>
                    <a
                      href='/'
                      className='dropdown-toggle'
                      data-toggle='dropdown'
                      role='button'
                      aria-haspopup='true'
                      aria-expanded='true'
                    >
                      Informasi Publik <i className='fa fa-angle-down'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      {/* Add other items similarly */}
                      <li>
                        <a href='https://bpbd.baliprov.go.id/v/104/sk-ppid-pelaksana'>
                          SK PPID Pelaksana
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* Continue adding your dropdown menus and other items here */}
                </ul>
              </div>
            </div>
          </nav>

          <div className='nav-search'>
            <span id='search'>
              <i className='fa fa-search'></i>
            </span>
          </div>

          <div className='search-block' style={{display: 'none'}}>
            <form action='https://bpbd.baliprov.go.id/search' method='get'>
              <input
                type='text'
                className='typeahead form-control'
                id='searchinput'
                name='searchinput'
                placeholder='Type what you want and enter'
              />
              <span className='search-close'>&times;</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
