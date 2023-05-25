import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
