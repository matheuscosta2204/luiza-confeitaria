import React from 'react';
// import GoogleMapReact from 'google-map-react';

import telephone from '../media/telephone.svg';
import whatsapp from '../media/whatsapp.svg';
// import pin from '../media/pin.svg';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-logo-box">
            <img src={require('../media/logo-fundo-branco.png')} alt="Luiza Confeitaria" className="logo" />
        </div>
        {/* <div style={{ height: '25vh', width: '40%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAJwJQpa-2kqGNid-neq0s6t_ar2F_bb4w" }}
                defaultCenter={{lat: -21.1935589, lng: -47.8290157}}
                defaultZoom={17}
                >
                <Marker
                    lat={-21.1933300}
                    lng={-47.8292100}
                    text="Luiza Confeitaria"
                />
            </GoogleMapReact>
        </div> */}
        <div>
            <h1>Rua Alberto de Oliveira, 363</h1>
            <h2>Jd. Maria Goretti</h2>
            <h2>Ribeirão Preto - São Paulo</h2>
        </div>
        <ul>
            <li><img src={telephone} alt="telephone" style={{ width: '20px' }} /><p>3013-2687</p></li>
            <li><img src={telephone} alt="telephone" style={{ width: '20px' }} /><p>3637-4709</p></li>
            <li><img src={whatsapp} alt="whatsapp" style={{ width: '20px' }} /><p>98262-2198</p></li>
        </ul>
    </div>
  );
}

// const Marker = () => {
//     return (
//         <div>
//             <img src={pin} alt="marker" style={{ width: "30px" }} />
//         </div>
//     )
// }

export default Footer;
