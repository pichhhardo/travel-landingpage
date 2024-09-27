import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa FontAwesome
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;