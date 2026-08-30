import Head from "next/head";
import VoiceOverPortfolio from "../components/VoiceOverPortfolio";
import { portfolioContent } from "../content/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>{portfolioContent.seo.title}</title>
        <meta
          name="description"
          content={portfolioContent.seo.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VoiceOverPortfolio />
    </>
  );
}
