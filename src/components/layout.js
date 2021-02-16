import React, { useRef } from 'react';

import Header from './header';
import Menu from './menu';
import Gallery from './gallery';
import Footer from './footer';

const Layout = () => {
  const ref = useRef(null);
  return (
    <>
      <Header reference={ref} />
      <Menu reference={ref} />
      <Gallery />
      <Footer />
    </>
  );
}

export default Layout;
