import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&family=Sofia+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap' rel='stylesheet' />
        <html lang='es' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
