
import "./globals.css";

import Navigation from './components/Navigation'

export default function RootLayout({ children }) {
  return (
    <html >
      <head>
        <title>Una app nueva por que soy un torombolo </title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
