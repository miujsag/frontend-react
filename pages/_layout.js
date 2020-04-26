import Head from "next/head";
import { OptionContext, OptionProvider } from "../context/OptionContext";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miujsag.org" />
        <meta property="og:title" content="Mi újság?" />
        <meta property="og:locale" content="hu_HU" />
        <meta
          property="og:description"
          content="A legfrissebb hírek, a legnépszerűbb híroldalakról, egy helyen."
        />
        <meta
          name="description"
          content="A legfrissebb hírek, a legnépszerűbb híroldalakról, egy helyen."
        />
        <title>Mi újság?</title>
        <link rel="icon" href="/images/favicon.png" type="image/png"></link>
      </Head>
      {children}
    </div>
  );
}
