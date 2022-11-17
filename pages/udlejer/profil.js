import Navbar from "components/Menu/Navbar2";
import Head from "next/head";
import en from "locales/en";
import da from "locales/da";
import de from "locales/de";
import { useRouter } from "next/router";
import Footer from "components/Menu/Footer";
import Dashboard from "components/Menu/Dashboard";

export default function Profil() {
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

      <div>
        <Dashboard
        h1="Profil">
          <div className="my-5">asdasdasd</div>
        </Dashboard>
      </div>
    </div>
  );
}
