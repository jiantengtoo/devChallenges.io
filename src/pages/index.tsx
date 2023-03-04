import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>devChallenges</title>
      </Head>
      <main className="p-8">
        <div className="pb-8">
          https://devchallenges.io/ is a Web Development Resources and Community
          that help you to become a Web Developer by working with Real-life
          projects and practices. This repo is my attempt at the practices.
        </div>
        <div className="grid gap-4">
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
        </div>
      </main>
    </>
  );
};

export default Home;
