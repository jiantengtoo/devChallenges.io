import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Tailwind</title>
      </Head>
      <main>
        <Link
          href={
            "/devchallenges.io/responsive-web-developer/404-not-found-challenge"
          }
        >
          <div className="ugly-btn">404-not-found-challenge</div>
        </Link>
        <Link
          href={
            "/devchallenges.io/responsive-web-developer/team-page-challenge"
          }
        >
          <div className="ugly-btn">team-page-challenge</div>
        </Link>
        <Link
          href={
            "/devchallenges.io/responsive-web-developer/interior-consultant"
          }
        >
          <div className="ugly-btn">interior-consultant</div>
        </Link>
        <Link href={"/devchallenges.io/responsive-web-developer/recipe-page"}>
          <div className="ugly-btn">recipe-page</div>
        </Link>
      </main>
    </>
  );
};

export default Home;
