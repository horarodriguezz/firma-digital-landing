import { useState } from "react";
import Head from "next/head";
import ProcessSection from "components/ProcessSection/ProcessSection";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import Certification from "components/Certification/Certification";
import SolutionsSection from "components/Solutions/SolutionsSection";
import BoxSection from "components/BoxSection/BoxSection";
import FinalSection from "components/HowCanHelpYou/FinalSection";
import FormSection from "components/FormSection/FormSection";
import Footer from "components/Footer";
import SubmitModal from "components/SubmitModal";

export default function HomePage() {
  const [status, setStatus] = useState(null);

  return (
    <>
      <Head>
        <title>Firma Digital - Firma de documentos electrónicos</title>
        <meta
          name='description'
          content='Certificado digital que permite la firma de documentos electrónicos, con la misma validez jurídica que un documento en papel firmado de puño y letra.'
        />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_HOSTNAME} />
        <meta
          property='og:title'
          content='Firma Digital - Firma de documentos electrónicos'
        />
        <meta
          property='og:description'
          content='Certificado digital que permite la firma de documentos electrónicos, con la misma validez jurídica que un documento en papel firmado de puño y letra.'
        />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_HOSTNAME} />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75`}
        />
        <meta property='twitter:card' content='photo' />
        <meta
          property='twitter:title'
          content='Firma Digital - Firma de documentos electrónicos'
        />
        <meta
          property='twitter:description'
          content='Certificado digital que permite la firma de documentos electrónicos, con la misma validez jurídica que un documento en papel firmado de puño y letra.'
        />
        <meta
          property='twitter:url'
          content={process.env.NEXT_PUBLIC_HOSTNAME}
        />
        <meta
          property='twitter:image'
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75`}
        />
      </Head>
      <Navbar />
      <main>
        <HomeSection />
        <Certification />
        <ProcessSection />
        <SolutionsSection />
        <BoxSection />
        <FinalSection />
        <FormSection setStatus={setStatus} />
      </main>
      <Footer />
      {status && <SubmitModal status={status} setStatus={setStatus} />}
    </>
  );
}
