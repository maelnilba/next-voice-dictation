import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Editor } from "../components/Editor";

const Index: NextPage<{ uaString: string }> = ({ uaString }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Head>
        <title>Next - Voice Dictation</title>
        <meta
          name="description"
          content="Next App Rich Editor Text + Speech Recognition"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex grow flex-col justify-center items-center">
        <Editor uaString={uaString} />
      </div>

      <footer className="mb-4">
        <div className="flex justify-center space-x-2 items-center mb-2 text-lg font-bold hover:cursor-pointer hover:underline ">
          <Image
            src="/images/logos/GitHub.png"
            width="24px"
            height="24px"
            alt="Github Logo"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/maelnilba/next-voice-dictation"}
          >
            Github
          </a>
        </div>
      </footer>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      uaString: req.headers["user-agent"],
    },
  };
};
export default Index;
