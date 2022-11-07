import Navbar from "components/Menu/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import { useRouter } from "next/router";
import Footer from "components/Menu/Footer";
import StickyFooter from "components/Sommerhus/StickyFooter";
import SommerhusGallery from "components/Sommerhus/SommerhusGallery";
import Top from "components/Sommerhus/Top";
import Facilities from "components/Sommerhus/Facilities";
import Description from "components/Sommerhus/Description";
import Host from "components/Sommerhus/Host"

export default function Sommerhus() {
  //Skift sprog i18n
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "da" ? da : locale === "de" ? de : locale === "en" ? en : "";

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Top name="Andreas og Nalas sommerhus" />

      <SommerhusGallery />
      <div className="border-t-2 border-green-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Host />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-green-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="pr-0 md:pr-28 text-center md:text-left">
          <Description />
        </div>
        <div className="pr-0 md:pr-28 text-center md:text-left">
          <Facilities />
        </div>
      </div>
      <StickyFooter />
      <Footer />
    </div>
  );
}